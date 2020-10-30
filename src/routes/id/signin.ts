import * as Joi from 'joi';

import { Req, Res } from "../../../types";

import { api } from "../..";
import User from "../../../lib/models/User";
import { validPassword, validEmail } from '../../../lib/tools/validation';

import { encryptWithSalt, compare } from '../../../lib/tools/encrypt';

import config from '../../../dot.config';

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

            if(req.cookies["_dotid_sess"]) return api.errors.stop(4015, res);
            if(req.headers["authorization"]) return api.errors.stop(4015, res);

            const user = await User.findOne({ where: { email: req.body.email } });

            if(!user) return api.errors.stop(4013, res);
            if(!await compare(req.body.password, user.password)) return api.errors.stop(4014, res);

            user.activeToken = api.token.createUserToken(user.id);

            await user.save({ fields: ["activeToken"] });

            res.cookie("_dotid_sess", user.activeToken, { expires: new Date(Date.now() + 900000000), httpOnly: true, sameSite: "strict" })

            api.errors.stop(200, res);
        },
        OPTIONS: (req: Req, res: Res) => api.errors.stop(200, res),
    }
}