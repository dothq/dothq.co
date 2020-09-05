import { readdirSync } from "fs";
import { resolve } from "path";

import { ROUTES_DIRECTORY, LOCALE_DEFAULT } from "../config";

import { Controller, api } from "..";

import { log } from "../tools/log";
import { goForAWalk } from "../tools/walker";

export class RouteManager {
    public api: Controller;

    constructor(api: Controller) {
        this.api = api;

        this.init()
    }

    private init() {
        const routes = goForAWalk(ROUTES_DIRECTORY);
        
        routes.forEach((routeLocation: string) => {
            const route = require(resolve(ROUTES_DIRECTORY, routeLocation)).default;

            if(!route.route) return log("error", this.api.locales.applyContext("en-US", "failedLoadingRoute", routeLocation.split(".")[0]))
            if(!route.accepts || route.accepts.length == 0) return log("error", this.api.locales.applyContext("en-US", "failedLoadingRouteMethod", routeLocation.split(".")[0]))
            if(!route.handlers) return log("error", this.api.locales.applyContext("en-US", "failedLoadingRouteHandler", routeLocation.split(".")[0]))

            for (const method of route.accepts) {
                api.app[method.toLowerCase()]("/api" + route.route, (req, res) => { 
                    const lang = req.query.lang ? api.locales.languageExists(req.query.lang) ? req.query.lang : "" : LOCALE_DEFAULT
                    const silent = req.query.silent ? req.query.silent == "true" ? true : false : false;

                    if(lang == "") return res.json({ ok: false, error: `No locale found for language \`${req.query.lang}\`.` })
                    else {
                        res.lang = lang;
                        res.silent = silent;
                        res.api = api;
                        route.handlers[method](req, res); 
                    }
                })
            }
        })
    }
}