import { readdirSync } from 'fs';
import { resolve } from 'path';
import { EventEmitter } from 'events';

import { LOCALE_DIRECTORY, LOCALE_DEFAULT, GITHUB_REPOSITORY_URL } from "../config";

import { readYaml } from '../tools/reader';
import { log } from '../tools/log';

import { Controller } from '..';

import { Req, Res, Route } from '../../types';

export class LocaleManager extends EventEmitter {
    public ['en-US'] = {};

    public load() {
        const locales = readdirSync(LOCALE_DIRECTORY);

        locales.forEach(locale => {
            const parent = locale.split(".yml")[0];

            this[parent] = {};

            const data = readYaml(resolve(LOCALE_DIRECTORY, locale))
            
            if(!data) return;
            
            Object.entries(data).forEach(([key, value]) => {
                this.injectLocaleIntoManager(parent, key, value);
            })
        })

        setTimeout(() => {
            this.emit("ready");
        }, 500);
    }

    public applyContext(family: string, key: string, ...ctx: any[]): { data: string, error: any } {
        const leftVars = key.split("{{").length;
        const rightVars = key.split("}}").length;

        if(leftVars !== rightVars) return log("error", `Failed to load special string \`${key}\` in the \`${family}\` language family.`)

        let data = "";
        let error = undefined;

        if(this[family] == undefined || this[family][key] == undefined) {
            data = this["en-US"][key]
            error = `Could not find i18n value by ID \`${key}\` inside the \`${family}\` locale family. Please report this to an administator.`
        } else {
            data = this[family][key]
        }

        let occurrence = 0;

        if(!data) return { data: "", error };

        data = data.replace(/{{\w+}}/g, (o) => {
            ++occurrence;
            return ctx[occurrence-1]
        })

        return { data, error };
    }

    public languageExists(language: string) {
        const denylist = ['load', 'applyContext', 'languageExists', 'injectLocaleIntoManager', 'constructor'];

        if(denylist.includes(language)) return false;
        if(this[language]) return true;
        else return false;
    } 

    private injectLocaleIntoManager(parent: string, key: string, value: string) {
        key = key.toLowerCase()

        this[parent][key] = value;
    }

    private loadLocaleMiddleware(api: Controller) {
        api.app.use((req: Req, res: Res, next) => {
            const route = api.router.routes.find((r: Route) => r.route == req.path.split("/api")[1]);

            if(process.env.NODE_ENV !== "production") console.log(`${req.method} ${req.path} (src/routes${route.locationOnPath}) => ${res.statusCode}`)

            const lang = req.query.lang ? api.locales.languageExists((req.query.lang as string)) ? req.query.lang : "" : LOCALE_DEFAULT

            if(lang == "") return res.json({ ok: false, error: `No locale file found for language \`${req.query.lang}\`.` })
            else {
                res.lang = (lang as string);
                res.api = api;

                res.header("X-Locale", res.lang);
                res.header("X-Powered-By", "Dot")
                route && res.header("X-Route-Source", `${GITHUB_REPOSITORY_URL}/blob/master/src/routes${route.locationOnPath}`)

                next();
            }
        })
    }

    constructor(api: Controller) {
        super();

        this.load();
        this.loadLocaleMiddleware(api);
    }
}