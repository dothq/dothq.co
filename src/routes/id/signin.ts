import { Req, Res } from "../../../types";

import { api } from "../..";

export default {
    route: '/id/sign-in',
    accepts: ['POST', 'OPTIONS'],
    handlers: {
        POST: (req: Req, res: Res) => {
            api.errors.stop(200, res)
        },
        OPTIONS: (req: Req, res: Res) => api.errors.stop(200, res),
    }
}