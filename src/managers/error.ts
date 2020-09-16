import { errors } from "../errors";
import { log } from "../tools/log";

import { api } from "..";
import { LOCALE_DEFAULT, GITHUB_REPOSITORY_URL } from "../config";
import { Route } from "../../types";

export class ErrorManager {
    private app;

    retrieveErrori18n({ code, lang, ctx, extraFields }: { code: number, lang: string, ctx?: any[], extraFields?: any }) {
        if(!errors[code]) return log("error", `Error code \`${code}\` could not be found.`)
        if(!extraFields) extraFields = {}

        const error = { ...errors[code], ...extraFields };

        const msg: any = api.locales.applyContext(lang, error.i18n_id, ...ctx || []);

        if(msg.error) error.fellback_to_default_locale = true;

        error.message = msg.data;
        error.code = error.code ? error.code : code;
        delete error.i18n_id

        return error;
    }

    constructor(app) {
        this.app = app;

        this.app.use((req, res, next) => {
            const route = api.router.routes.find((r: Route) => r.route == req.path.split("/api")[1]);

            route && res.header("X-Route-Source", `${GITHUB_REPOSITORY_URL}/blob/master/src/routes${route.locationOnPath}`)
            res.header("X-Powered-By", "Dot")

            res.status(404);

            if(res.statusCode == 404) {
                if(route && !route.accepts.includes(req.method)) {
                    const accepts = route.accepts.map((accept, index) => {
                        if(index == route.accepts.length-1 && route.accepts.length <= 1) return "or " + accept;
                        return accept;
                    }).join(", ");

                    return res.send(this.retrieveErrori18n({
                        code: 4050, 
                        lang: res.lang,
                        ctx: [req.method, accepts]
                    }));
                }

                return res.send(this.retrieveErrori18n({
                    code: 404,
                    lang: res.lang
                }));
            }

            next();
        })
    }

    stop(errorCode: number, res: any) {
        const error = this.retrieveErrori18n({ code: errorCode, lang: res.lang });

        res.status(error.code).json(error)
    }
}