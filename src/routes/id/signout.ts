import { Req, Res } from "../../../types";

import { api } from "../..";
import User from "../../../lib/models/User";

export default {
    route: '/id/sign-out',
    accepts: ['POST', 'OPTIONS'],
    handlers: {
        POST: async (req: Req, res: Res) => {
            if(!req.cookies["_dotid_sess"]) return api.errors.stop(4003, res);

            const user = await User.findOne({ where: { activeToken: req.cookies["_dotid_sess"] } });

            if(user) {
                user.activeToken = null;
                await user.save({ fields: ["activeToken"] });
            }

            res.clearCookie("_dotid_sess")

            api.errors.stop(200, res);
        },
        OPTIONS: (req: Req, res: Res) => api.errors.stop(200, res),
    }
}