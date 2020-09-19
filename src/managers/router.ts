import * as cors from 'cors';
import { resolve } from "path";

import { ROUTES_DIRECTORY, LOCALE_DEFAULT, API_CORS_ORIGINS } from "../config";

import { Controller, api } from "..";

import { log } from "../tools/log";
import { goForAWalk } from "../tools/walker";
import { Route } from "../../types";
import { verifyCaptcha } from "../tools/captcha";

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

                api.app[method.toLowerCase()]("/api" + route.route, cors({ origin: API_CORS_ORIGINS }), async (req, res) => { 
                    if(route.requiredBodyFields) {
                        const body = route.requiredBodyFields;

                        let missingItems = [];
                        var invalidTypeItems = [];
                        let bodyType = "string";

                        body.forEach((item: string | any) => {
                            const key = typeof(item) == "string" ? item : item.key;
                            bodyType = typeof(item);

                            if(!req.body[key]) missingItems.push(key)
                        })

                        const types = (body as any).map(b => {
                            if(bodyType == "string") return { name: b, expects: "string" }
                            return { name: b.key, expects: b.type } 
                        })

                        if(missingItems.length !== 0) return api.errors.stop(4005, res, [missingItems.join(", ")], { types })
                    }
                    
                    if(route.flags) {
                        if(route.flags.requireChallenge) {
                            if(!req.body.challenge_token) return api.errors.stop(4011, res);

                            const isValid = await verifyCaptcha(req.body.challenge_token);
                            if(!isValid) return api.errors.stop(4010, res);
                        }
                    }

                    route.handlers[method](req, res);
                })
            }
        })
    }
}