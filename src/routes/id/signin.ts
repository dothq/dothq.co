import { Req, Res } from "../../../types";

import { api } from "../..";

export default {
    route: '/id/sign-in',
    accepts: ['POST'],
    handlers: {
        POST: (req: Req, res: Res) => {
            if(res.silent) return res.end();
            
            api.errors.stop(200, res)
        }
    }
}