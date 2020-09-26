import * as Joi from 'joi';

import { Req, Res } from "../../../types";

import { api } from "../..";
import User from "../../models/User";
import { validPassword, validEmail } from '../../tools/validation';

import { encryptWithSalt, compare } from '../../tools/encrypt';

import * as credentials from '../../../credentials.json';

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

            const user = await User.findOne({ where: { email: await encryptWithSalt(req.body.email, credentials.EMAIL_SALT) } });

            if(!user) return api.errors.stop(4013, res);

            if(!await compare(req.body.password, user.password)) return api.errors.stop(4014, res);

            api.errors.stop(200, res, [], { result: { userId: user.id, token: user.activeToken } });
        },
        OPTIONS: (req: Req, res: Res) => api.errors.stop(200, res),
    }
}