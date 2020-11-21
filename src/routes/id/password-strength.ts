import { Req, Res } from "../../../types";

import { api } from "../..";

import * as checkPasswordStrength from "check-password-strength";

export default {
    route: '/id/password-strength',
    accepts: ['POST', 'OPTIONS'],
    requiredBodyFields: ["password"],
    handlers: {
        POST: (req: Req, res: Res) => {
            const { id, contains } = checkPasswordStrength(req.body.password);

            // id: 0 = Weak, 1 = Medium, 2 = Strong

            api.errors.stop(200, res, [], { result: {
                strength: id,
                points: contains
            }})
        },
        OPTIONS: (req: Req, res: Res) => api.errors.stop(200, res),
    }
}