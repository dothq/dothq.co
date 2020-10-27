import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';

import { Controller } from ".";

import { Res, Req, Route } from "../types";
import config from "../dot.config";

export const runMiddleware = (server: Controller) => {
    server.app.use(helmet())
    server.app.use(bodyParser.json())

    server.app.use((req: Req, res: Res, next) => {
        const route = server.router.routes.find((r: Route) => r.route == req.path.split("/api")[1]);

        const lang = req.query.lang ? server.locales.languageExists((req.query.lang as string)) ? req.query.lang : "" : config.locale.default

        if(lang == "") return res.json({ ok: false, error: `No locale file found for language \`${req.query.lang}\`.` })
        else {
            res.lang = (lang as string);
            res.api = server;

            if(!route) {
                res.status(404);

                return res.send(server.errors.retrieveErrori18n({
                    code: 404,
                    lang: res.lang
                }));
            };

            if(route && !route.accepts.includes(req.method) && !route.accepts.includes("ALL")) {
                res.status(404);

                const accepts = route.accepts.map((accept, index) => {
                    if(index == route.accepts.length-1 && route.accepts.length <= 1) return "or " + accept;
                    return accept;
                }).join(", ");

                return res.send(server.errors.retrieveErrori18n({
                    code: 4050, 
                    lang: res.lang,
                    ctx: [req.method, accepts]
                }));
            }

            res.header("X-Locale", res.lang);
            res.header("X-Powered-By", "Dot")
            route && res.header("X-Route-Source", `${config.general.githubRepository}/blob/master/src/routes${route.locationOnPath}`)

            if(process.env.NODE_ENV == "development") console.log(`${req.method} ${req.path} ${route ? `(src/routes${route.locationOnPath}) =>` : `=>`} ${res.statusCode}`)    

            next();
        }
    })

    server.app.use((err: any, req: Req, res: Res, next) => {
        if (err instanceof SyntaxError && (err as any).status === 400 && "body" in err) {
            const lang = req.query.lang ? server.locales.languageExists((req.query.lang as string)) ? req.query.lang : "" : config.locale.default;
            res.lang = (lang as string);
            server.errors.stop(4012, res);
        } else next();
    });
}