import * as Joi from 'joi';

import { Req, Res } from "../../../types";

import User from "../../models/User";

import { api } from "../..";

import { validPassword, validEmail } from '../../tools/validation';
import { makeId } from '../../tools/id';
import { encrypt, encryptWithSalt } from '../../tools/encrypt';

import * as credentials from '../../../credentials.json';

const sleep = (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export default {
    route: '/id/sign-up',
    accepts: ['POST', 'OPTIONS'],
    flags: { 
        requireChallenge: process.env.NODE_ENV == "production" ? true : false
    },
    bodySchema: Joi.object({
        username: Joi.string()
            .alphanum()
            .min(4)
            .max(38)
            .required(),

        password: Joi.string()
            .custom((value, helpers) => { return validPassword(value) ? value : helpers.error("any.invalid") })
            .required(),
    
        email: Joi.string()
            .custom((value, helpers) => { return validEmail(value) ? value : helpers.error("any.invalid") })
            .required(),
    }),
    handlers: {
        POST: async (req: Req, res: Res) => {
            const userExists = await User.findOne({ where: { email: await encryptWithSalt(req.body.email, credentials.EMAIL_SALT) } }).then(exists => { return !!exists })

            await sleep(userExists ? 500 : 1250);

            if(!userExists) {
                const activeToken = res.api.token.createUserToken({ data: req.body });
                const password = await encrypt(req.body.password);
                const email = await encryptWithSalt(req.body.email, credentials.EMAIL_SALT);

                req.body = { 
                    ...req.body, 
                    id: makeId(), 
                    activeToken,
                    email,
                    password
                }

                await User.create(req.body)
            }

            api.errors.stop(userExists ? 4009 : 200, res, [], userExists ? { fields: ["email"] } : {});
        },
        OPTIONS: (req: Req, res: Res) => api.errors.stop(200, res),
    }
}