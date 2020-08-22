import { readdirSync } from 'fs';
import { resolve } from 'path';
import { EventEmitter } from 'events';

import { LOCALE_DIRECTORY } from "../config";

import { readYaml } from '../tools/reader';
import { log } from '../tools/log';

import { Controller } from '..';
import { black } from 'chalk';

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
        key = key.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (o) => o.toUpperCase()).replace(/_/g, "")

        this[parent][key] = value;
    }

    constructor(api: Controller) {
        super();

        this.load()
    }
}