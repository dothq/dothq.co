import * as Joi from 'joi';

import { Req, Res } from "../../../types";

import { api } from "../..";
import config from '../../../dot.config';

export default {
    route: '/id/me',
    accepts: ['POST', 'OPTIONS'],
    flags: {
        requireAuthorization: true
    },
    bodySchema: Joi.object({ 
        fields: Joi.array()
            .items(Joi.string())
            .min(1)
            .required()
    }),
    handlers: {
        POST: (req: Req, res: Res) => {
            if(!res.authorizedUser) return;

            let fields = req.body.fields;
            const data = {};

            fields = fields.filter(f => { return !config.general.bannedUserFields.includes(f) })

            for (const field of fields) {
                data[field] = res.authorizedUser[field]
            }

            api.errors.stop(200, res, [], { result: data })
        },
        OPTIONS: (req: Req, res: Res) => api.errors.stop(200, res),
    }
}