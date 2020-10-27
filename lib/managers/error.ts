import { errors } from "../../src/errors";
import { log } from "../tools/log";

import { api } from "../../src";

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
    }

    stop(errorCode: number, res: any, ctx?: any, extraFields?: any) {
        const error = this.retrieveErrori18n({ code: errorCode, lang: res.lang, ctx, extraFields });

        res.status(error.code).json(error);
    }
}