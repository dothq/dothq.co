import * as cors from 'cors';
import { resolve } from "path";

import { ROUTES_DIRECTORY, LOCALE_DEFAULT, API_CORS_ORIGINS, BEARER_TOKEN_REGEX } from "../config";

import { Controller, api, sequelize } from "..";

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

                let middleware = [cors({ origin: API_CORS_ORIGINS })]

                if(route.middleware) middleware = [...middleware, ...route.middleware];

                api.app[method.toLowerCase()]("/api" + route.route, middleware, async (req, res) => { 
                    if(route.bodySchema) {
                        const validated = route.bodySchema.validate(req.body);

                        if(validated.error) return api.errors.stop(4006, res, [validated.error.details[0].message], );
                    }
                    
                    if(route.flags) {
                        if(route.flags.requireChallenge) {
                            if(!req.body.challenge_token) return api.errors.stop(4011, res);

                            const isValid = await verifyCaptcha(req.body.challenge_token);
                            if(!isValid) return api.errors.stop(4010, res);
                        }

                        if(route.flags.requireAuthorization) {
                            if(!req.headers["authorization"] || !BEARER_TOKEN_REGEX.test(req.headers["authorization"])) return api.errors.stop(4003, res);
                            else {
                                const token = req.headers["authorization"].split("Bearer ")[1].replace(/ /g, "");

                                const decrypted = await api.token.get(token)

                                if(decrypted.error) return api.errors.stop(decrypted.error, res);
                                
                                if(decrypted.id) {
                                    const User = require("../models/User").default;

                                    const user = await User.findOne({ where: { id: decrypted.id } });

                                    if(!user) return api.errors.stop(4003, res);
                                    
                                    res.authorizedUser = user.dataValues;
                                }
                            }
                        }
                    }

                    route.handlers[method](req, res);
                })
            }
        })
    }
}