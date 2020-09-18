import { Sequelize } from "sequelize";

import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import { Server } from './server';

import { LocaleManager } from './managers/locale';
import { RouteManager } from './managers/router';
import { ErrorManager } from './managers/error';

import { API_PORT, API_CORS_ORIGINS } from './config';

import { log } from './tools/log';

import { WebManager } from './managers/web';

import * as credentials from '../credentials.json';

export const sequelize = new Sequelize(credentials.POSTGRES_URI, { logging: false })

sequelize
  .authenticate()
  .then(() => {
    log("info", api.locales["en-US"]["api_db_connected"])
  })
  .catch((err) => {
    throw new Error(err);
  });

export class Controller extends Server {
    private _ready: boolean = false;
    
    public locales: LocaleManager;
    public router: RouteManager;
    public errors: ErrorManager;

    private web: WebManager;

    constructor() {
        super();

        this.locales = new LocaleManager(this);

        this.locales.on("ready", () => {
            this.app.use(bodyParser.json())

            this.router = new RouteManager(this);
            this.errors = new ErrorManager(this.app);
            this.web = new WebManager(this.app);
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
