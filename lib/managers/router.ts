import * as cors from 'cors';
import { resolve } from "path";

import config from "../../dot.config";

import { Controller, api } from "../../src";

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
        const routes = goForAWalk(config.api.routesData);
        
        routes.forEach((routeLocation: string) => {
            const route: Route = require(resolve(config.api.routesData, routeLocation)).default;

            if(!route.route) return log("error", this.api.locales.applyContext("en-US", "failed_loading_route", routeLocation.split(".")[0]))
            if(!route.accepts || route.accepts.length == 0) return log("error", this.api.locales.applyContext("en-US", "failed_loading_route_method", routeLocation.split(".")[0]))
            if(!route.handlers) return log("error", this.api.locales.applyContext("en-US", "failed_loading_route_handler", routeLocation.split(".")[0]))

            route.locationOnPath = routeLocation.split(config.api.routesData)[1];

            this.routes.push(route);

            for (const method of route.accepts) {
                if(!route.handlers[method]) return log("error", this.api.locales.applyContext("en-US", "failed_loading_route_handler", route.locationOnPath))

                let middleware = [cors({ origin: config.api.origins })]

                if(route.middleware) middleware = [...middleware, ...route.middleware];

                api.app[method.toLowerCase()]("/api" + route.route, middleware, async (req, res) => { 
                    if(route.flags) {
                        if(route.flags.requireChallenge) {
                            if(!req.body.challenge_token) return api.errors.stop(4011, res);

                            const isValid = await verifyCaptcha(req.body.challenge_token);
                            if(!isValid) return api.errors.stop(4010, res);
                        }

                        if(route.flags.requireAuthorization) {
                            const raw = (req.headers["authorization"]
                                        ? req.headers["authorization"] 
                                        : (req.cookies && req.cookies["_dotid_sess"])
                                            ? req.cookies["_dotid_sess"]
                                            : "").replace(/Bearer /g, "").replace(/ /g, "")

                            if(!config.regex.token.test("Bearer " + raw)) return api.errors.stop(4003, res);

                            const decrypted = await api.token.get(raw)

                            if(decrypted.error) return api.errors.stop(decrypted.error, res);
                            
                            if(decrypted.id) {
                                const User = require("../models/User").default;

                                const user = await User.findOne({ where: { id: decrypted.id } });

                                if(!user) return api.errors.stop(4003, res);
                                
                                res.authorizedUser = user.dataValues;
                            }
                        }
                    }

                    if(route.bodySchema) {
                        const validated = route.bodySchema.validate(req.body);

                        if(validated.error) return api.errors.stop(4006, res, [validated.error.details[0].message], );
                    }

                    route.handlers[method](req, res);
                })
            }
        })
    }
}