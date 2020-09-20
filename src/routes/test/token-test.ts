import { Req, Res } from "../../../types";

import { api } from "../..";

import { TokenManager } from "../../managers/token";

export default {
    route: '/test/token-test',
    accepts: ['POST', 'OPTIONS'],
    requiredBodyFields: ["email", "password", "username"],
    handlers: {
        POST: async (req: Req, res: Res) => {
            const tokenManager = new TokenManager();

            const token = tokenManager.create({ data: req.body, expires: "3m" })

            api.errors.stop(200, res, [], { token, tokenData: tokenManager.get(token) })
        },
        OPTIONS: (req: Req, res: Res) => api.errors.stop(200, res),
    }
}