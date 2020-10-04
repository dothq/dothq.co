import * as Joi from 'joi';

import { Req, Res } from "../../../types";

import { api } from "../..";
import User from "../../models/User";
import { validEmail, validPassword } from '../../tools/validation';

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

        avatar: Joi.string()
    }),
    handlers: {
        PUT: async (req: Req, res: Res) => {
            api.errors.stop(200, res);
        },
        OPTIONS: (req: Req, res: Res) => api.errors.stop(200, res),
    }
}