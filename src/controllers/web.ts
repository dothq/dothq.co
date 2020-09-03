import * as express from 'express';
import * as gatsbyController from 'gatsby-plugin-express';

import { resolve } from 'path';

export class WebController {
    public app;

    constructor(app) {
        this.app = app;

        this.app.use(express.static('public/'));
        app.use(gatsbyController('gatsby.json', {
            publicDir: resolve(process.cwd(), "public"),
            template: resolve(process.cwd(), "public", "404", "index.html"),
            redirectSlashes: true,
        }));
    }
}