import * as express from 'express';

export class Server {
    public app: express.Application;

    constructor() {
        this.app = express()
    }

    public _listen(port: number) {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                resolve(true)
            })
        });
    }
}