import { Req, Res } from "../../../types";

import { api } from "../..";

const sleep = (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export default {
    route: '/id/sign-in',
    accepts: ['POST', 'OPTIONS'],
    handlers: {
        POST: async (req: Req, res: Res) => {
            // Add a delay to slow down brute force attacks on accounts
            await sleep(2000);

            api.errors.stop(200, res)
        },
        OPTIONS: (req: Req, res: Res) => api.errors.stop(200, res),
    }
}