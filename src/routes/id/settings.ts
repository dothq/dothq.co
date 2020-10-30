import * as Joi from 'joi';

import { Req, Res } from "../../../types";

import { api } from "../..";
import User from "../../../lib/models/User";
import { validEmail, validPassword } from '../../../lib/tools/validation';
import { encrypt, encryptWithSalt } from '../../../lib/tools/encrypt';

export default {
    route: '/id/settings',
    accepts: ['PUT', 'OPTIONS'],
    flags: {
        requireAuthorization: true
    },
    bodySchema: Joi.object({ 
        username: Joi.string()
            .alphanum()
            .min(4)
            .max(38),

        password: Joi.string()
            .custom((value, helpers) => { return validPassword(value) ? value : helpers.error("any.invalid") }),

        email: Joi.string()
            .custom((value, helpers) => { return validEmail(value) ? value : helpers.error("any.invalid") }),

        avatarId: Joi.string()
    }),
    handlers: {
        PUT: async (req: Req, res: Res) => {
            if(!res.authorizedUser) return;

            const data: any = {
                ...res.authorizedUser
            };

            if(req.body.username) data._username = req.body.username;
            if(req.body.password) data._password = await encrypt(req.body.password);
            if(req.body.email) data._email = req.body.email;

            const queued = {};

            for (const [key, value] of Object.entries(data)) {
                if(key.startsWith("_") && data[key.split("_")[1]] !== value) queued[key.split("_")[1]] = value;
            }

            await User.update(queued, {
                where: {
                    id: res.authorizedUser.id
                }
            });

            api.errors.stop(200, res, [], { changed: Object.keys(queued).length === 0 ? {} : req.body })
        },
        OPTIONS: (req: Req, res: Res) => api.errors.stop(200, res),
    }
}