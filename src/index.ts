import * as bodyParser from 'body-parser';

import { Server } from './server';

import { LocaleManager } from './managers/locale';
import { RouteManager } from './managers/router';
import { ErrorManager } from './managers/error';

import { API_PORT } from './config';

import { log } from './tools/log';

import { WebController } from './controllers/web';

export class Controller extends Server {
    private _ready: boolean = false;
    
    public locales: LocaleManager;
    public router: RouteManager;
    public errors: ErrorManager;

    private web: WebController;

    constructor() {
        super();

        this.locales = new LocaleManager(this);

        this.locales.on("ready", () => {
            this.app.use(bodyParser.json())

            this.router = new RouteManager(this);
            this.errors = new ErrorManager(this.app);
            this.web = new WebController(this.app);
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
            log("info", this.locales.applyContext("en-US", "api_listening_on", port).data)
        });
    }
}

export const api = new Controller();

api.listen(API_PORT);
