import * as Joi from 'joi';

import { Req, Res } from "../../../types";

import User from "../../models/User";
import { api } from "../..";

import { validPassword, validEmail } from '../../tools/validation';

const sleep = (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export default {
    route: '/id/sign-up',
    accepts: ['POST'],
    flags: { 
        requireChallenge: false /* TODO change requireChallenge back to true for /id/sign-up */
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
            let exitCode = 200;
            let sleepTime = 1250;

            console.log(User)

            const userExists = await User.findOne({ where: { email: req.body.email } }).then(exists => { return !!exists })

            if(userExists) {
                exitCode = 4009;
                sleepTime = 500;
            } else {
                const user = await User.create(req.body);

                const token = res.api.token.createUserToken({ data: { ...req.body, id: user.id } });
                await user.update({ ...user, activetoken: token });
            }

            await sleep(sleepTime);

            api.errors.stop(exitCode, res);
        }
    }
}