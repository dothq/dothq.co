const { router, routerSettings } = require("./router");
const useRateLimit = require("express-rate-limit");
const chalk = require("chalk");
const { throwError } = require("./error")

const startRouteManager = (app) => {
    router.forEach(route => {
        route.methods.forEach(method => {
            const friendlyMethod = method.toLowerCase();
            const endpoint = routerSettings.base + route.endpoint

            if(
                route.rateLimit &&
                route.rateLimit.enabled &&
                route.rateLimit.maxRequests && 
                route.rateLimit.rateLimitMs &&
                process.env.NODE_ENV !== "dev"
            ) {
                const rateLimit = useRateLimit({
                    windowMs: route.rateLimit.rateLimitMs,
                    max: route.rateLimit.maxRequests,
                    skipFailedRequests: route.rateLimit.skipFailedRequests,
                    handler: (req, res) => { 
                        res.status(429)
                        throwError(3000, `Too many requests have been sent from this IP. Try again in ${route.rateLimit.rateLimitMs}ms.`, res) 
                    }
                })
    
                app[friendlyMethod](endpoint, rateLimit, route.route)
            } else {
                app[friendlyMethod](endpoint, route.route)
            }
    
            console.log(`${chalk.bold.blue('Routes')} Loaded ${method} ${endpoint} endpoint on application`)
        })
    })
}

exports.startRouteManager = startRouteManager;