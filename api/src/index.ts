import { Server } from './server';

import { LocaleManager } from './managers/locale';

import { API_PORT } from './config';
import { log } from './tools/log';
import { RouteManager } from './managers/router';

export class Controller extends Server {
    private _ready: boolean = false;

    public locales: LocaleManager;
    public router: RouteManager;

    constructor() {
        super();

        this.locales = new LocaleManager(this);

        this.locales.on("ready", () => {
            this.router = new RouteManager(this);
            this._ready = true;
        })
    }

    public ready() {
        return new Promise((resolve) => {
            setInterval(() => this._ready == true && resolve(true), 1)
        })
    }

    public async listen(port: number) {
        await this.ready();

        this._listen(port).then((e) => {
            log("info", this.locales.applyContext("en-US", "apiListeningOn", port))
        });
    }
}

export const api = new Controller();

api.listen(API_PORT);
