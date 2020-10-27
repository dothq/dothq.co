import { readdirSync } from 'fs';
import { resolve } from 'path';
import { EventEmitter } from 'events';

import config from "../../dot.config";

import { readYaml } from '../tools/reader';
import { log } from '../tools/log';

import { Controller } from '../../src';

export class LocaleManager extends EventEmitter {
    private api: Controller;
    public ['en-US'] = {};

    public load() {
        const locales = readdirSync(config.locale.localeData);

        locales.forEach(locale => {
            const parent = locale.split(".yml")[0];

            this[parent] = {};

            const data = readYaml(resolve(config.locale.localeData, locale))
            
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
            data = this[config.locale.default][key]
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

    }

    constructor(api: Controller) {
        super();

        this.api = api;

        this.load();
        this.loadLocaleMiddleware(api);
    }
}