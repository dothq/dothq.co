import * as express from 'express';
import * as gatsbyController from 'gatsby-plugin-express';
import * as proxy from 'express-http-proxy';

import { resolve } from 'path';

import { log } from '../tools/log';
import { api } from '../../src';
import config from '../../dot.config';

export class WebManager {
    public app;

    constructor(app) {
        this.app = app;

        if(process.env.NODE_ENV == "production") {
            log("info", "Running in production mode.")

            this.app.use(express.static('public/'));
            app.use(gatsbyController('gatsby.json', {
                publicDir: resolve(process.cwd(), "public"),
                template: resolve(process.cwd(), "public", "404", "index.html"),
                redirectSlashes: true,
            }));
        } else {
            log("info", "Running in development mode.")
            log("warning", api.locales.applyContext(config.locale.default, "api_logs_development").data)

            app.use('/', proxy('http://localhost:8000', {
                filter: function (req, res) { 
                  return new Promise(function (resolve) {                     
                    resolve(!req.path.startsWith("/api"));
                  }); 
                }
            }));
        }
    }
}