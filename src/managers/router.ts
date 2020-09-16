import { readdirSync } from "fs";
import { resolve } from "path";

import { ROUTES_DIRECTORY, LOCALE_DEFAULT } from "../config";

import { Controller, api } from "..";

import { log } from "../tools/log";
import { goForAWalk } from "../tools/walker";
import { Route } from "../../types";

export class RouteManager {
    public api: Controller;
    public routes: Route[] = [];

    constructor(api: Controller) {
        this.api = api;

        this.init()
    }

    private init() {
        const routes = goForAWalk(ROUTES_DIRECTORY);
        
        routes.forEach((routeLocation: string) => {
            const route: Route = require(resolve(ROUTES_DIRECTORY, routeLocation)).default;

            if(!route.route) return log("error", this.api.locales.applyContext("en-US", "failed_loading_route", routeLocation.split(".")[0]))
            if(!route.accepts || route.accepts.length == 0) return log("error", this.api.locales.applyContext("en-US", "failed_loading_route_method", routeLocation.split(".")[0]))
            if(!route.handlers) return log("error", this.api.locales.applyContext("en-US", "failed_loading_route_handler", routeLocation.split(".")[0]))

            route.locationOnPath = routeLocation.split(ROUTES_DIRECTORY)[1];

            this.routes.push(route);

            for (const method of route.accepts) {
                if(!route.handlers[method]) return log("error", this.api.locales.applyContext("en-US", "failed_loading_route_handler", route.locationOnPath))

                api.app[method.toLowerCase()]("/api" + route.route, (req, res) => { 
                    route.handlers[method](req, res);
                })
            }
        })
    }
}