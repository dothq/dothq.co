import { Req, Res } from "../../../types";

import { api } from "../..";

export default {
    route: '/id/sign-in',
    accepts: ['POST', 'GET', 'PATCH'],
    handlers: {
        POST: (req: Req, res: Res) => {
            if(res.silent) return res.end();
            
            console.log(res.lang)

            api.errors.stop(404, res)
        },
        GET: (req: Req, res: Res) => {
            if(res.silent) return res.end();
            
            console.log(res.lang)

            api.errors.stop(404, res)
        },
        PATCH: (req: Req, res: Res) => {
            if(res.silent) return res.end();
            
            console.log(res.lang)

            api.errors.stop(404, res)
        }
    }
}