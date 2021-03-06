import axios from 'axios';

import config from '../../dot.config';

export default class APIController {
    public apiHost = "";

    constructor() {
        const env = process.env.NODE_ENV;

        this.apiHost = env == "development" ? "/api" : config.api.uris.prod;
    }

    get(route: string, vars?: any[]) {
        return new Promise((resolve, reject) => {
            console.log(`Fullfilling GET request to`, this.apiHost + this.substitute(route, vars))

            axios.get(this.apiHost + this.substitute(route, vars), { timeout: 2000 }).then(res => {
                console.log(res)

                resolve({
                    data: res.data,
                    status: res.status,
                    ok: res.status.toString().startsWith("2")
                })
            }).catch(e => {
                reject(e)
            });
        })
    }

    post(route: string, body: any, token?: string) {
        if(token && token.length == 0) return;

        return new Promise((resolve, reject) => {
            console.log(`Fullfilling POST request to`, this.apiHost + route)

            axios.post(this.apiHost + route, body, { timeout: 4000, headers: { "Authorization": token ? `Bearer ${token}` : `` } }).then(res => {
                console.log(res)

                resolve({
                    data: res.data,
                    status: res.status,
                    ok: res.status.toString().startsWith("2")
                })
            }).catch(e => {
                console.log(e)
                reject(e)
            });
        })
    }

    substitute(o: string, vars: any[]) {
        var occurrence = 0;

        return o.replace(/:\w+/g, (o) => {
            ++occurrence;
            return vars[occurrence-1]
        })
    }
}