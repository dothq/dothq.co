import axios from 'axios';

import { API_DEV_URL, API_PROD_URL } from '../config';

export default class APIController {
    public apiHost = "";

    constructor() {
        const env = process.env.NODE_ENV;

        this.apiHost = env == "development" ? API_DEV_URL : API_PROD_URL;
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
                console.log(e)
                reject(e)
            });
        })
    }

    post(route: string, body: any) {
        return new Promise((resolve, reject) => {
            console.log(`Fullfilling POST request to`, this.apiHost + route)

            axios.post(this.apiHost + route, body, { timeout: 4000 }).then(res => {
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