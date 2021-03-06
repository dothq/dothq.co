import * as Joi from 'joi';

import NodeRSA from 'node-rsa';

import { Req, Res } from "../../../types";

import User from "../../../lib/models/User";

import { api } from "../..";

import { validPassword, validEmail } from '../../../lib/tools/validation';
import { makeId } from '../../../lib/tools/id';
import { encrypt, encryptWithSalt } from '../../../lib/tools/encrypt';

import config from '../../../dot.config';

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
            const userExists = await User.findOne({ where: { email: req.body.email } }).then(exists => { return !!exists })

            await sleep(userExists ? 500 : 1250);

            if(!userExists) {
                const id = makeId();
                const activeToken = res.api.token.createUserToken(id);
                const password = await encrypt(req.body.password);
                const email = req.body.email;

                req.body = { 
                    ...req.body, 
                    id, 
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