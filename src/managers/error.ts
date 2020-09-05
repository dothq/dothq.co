import { errors } from "../errors";
import { log } from "../tools/log";

import { api } from "..";

export class ErrorManager {
    private app;

    constructor(app) {
        this.app = app;

        this.app.use((req, res, next) => {
            res.status(404).send('what???');

            next();
        })
    }

    stop(errorCode: number, res: any) {
        if(!errors[errorCode]) return log("error", `Error code \`${errorCode}\` could not be found.`)

        const error = { ...errors[errorCode] };

        error.message = api.locales.applyContext(res.lang, error.i18n_id, [])
        delete error.i18n_id

        res.json(error)
    }
}