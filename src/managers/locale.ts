import { readdirSync } from 'fs';
import { resolve } from 'path';
import { EventEmitter } from 'events';

import { LOCALE_DIRECTORY, LOCALE_DEFAULT } from "../config";

import { readYaml } from '../tools/reader';
import { log } from '../tools/log';

import { Controller } from '..';
import { Req, Res } from '../../types';

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

    public applyContext(family: string, key: string, ...ctx: any[]) {
        const leftVars = key.split("{{").length;
        const rightVars = key.split("}}").length;

        if(leftVars !== rightVars) return log("error", `Failed to load special string \`${key}\` in the \`${family}\` language family.`)

        if(this[family] == undefined || this[family][key] == undefined) throw new Error(`Could not find i18n value by ID \`${key}\` inside the \`${family}\` locale family. Please report this to an administator.`)
        let data = this[family][key];

        let occurrence = 0;

        if(!data) return "";

        data = data.replace(/{{\w+}}/g, (o) => {
            ++occurrence;
            return ctx[occurrence-1]
        })

        return data;
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
            const lang = req.query.lang ? api.locales.languageExists((req.query.lang as string)) ? req.query.lang : "" : LOCALE_DEFAULT
            const silent = req.query.silent ? req.query.silent == "true" ? true : false : false;

            if(lang == "") return res.json(silent ? {} : { ok: false, error: `No locale file found for language \`${req.query.lang}\`.` })
            else {
                res.lang = (lang as string);
                res.silent = silent;
                res.api = api;
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