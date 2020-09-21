import * as Joi from 'joi';

import { Req, Res } from "../../../types";

import { api } from "../..";
import User from "../../models/User";
import { validPassword, validEmail } from '../../tools/validation';

const sleep = (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export default {
    route: '/id/sign-in',
    accepts: ['POST', 'OPTIONS'],
    bodySchema: Joi.object({
        password: Joi.string()
            .custom((value, helpers) => { return validPassword(value) ? value : helpers.error("any.invalid") })
            .required(),
    
        email: Joi.string()
            .custom((value, helpers) => { return validEmail(value) ? value : helpers.error("any.invalid") })
            .required(),
    }),
    handlers: {
        POST: async (req: Req, res: Res) => {
            // Add a delay to slow down brute force attacks on accounts
            await sleep(2000);

            const user = await User.findOne({ where: { email: req.body.email } });

            if(!user) return api.errors.stop(4013, res);

            // let token = user.active_token || "";

            // if(!user.active_token) {
            //     console.log("Token does not exist, creating...")

            //     token = res.api.token.createUserToken({ data: { ...req.body, id: user.id } });

            //     console.log({ ...user, active_token: token })

            //     await user.update({ ...user, active_token: token });

            //     console.log("Created fresh token.")
            // }

            // if(user) api.errors.stop(200, res, [], { userId: user.id, token });
            // else api.errors.stop(4013, res);
        },
        OPTIONS: (req: Req, res: Res) => api.errors.stop(200, res),
    }
}