import * as jwt from 'jsonwebtoken';

import { promisify } from 'util';

import { readFileSync } from 'fs';

import { AUTH_ALGORITHM, AUTH_SECRET_KEY, AUTH_USER_TOKEN_EXPIRE } from '../config';
import { api } from '..';
import { Res } from '../../types';

export class TokenManager {
    private key: string;

    constructor() {
        this.key = readFileSync(AUTH_SECRET_KEY, "utf-8");
    }

    public create({ data, expires }: { data: any, expires: string | number | any }) {
        return jwt.sign(data, this.key, {
            expiresIn: expires,
            algorithm: AUTH_ALGORITHM
        });
    }

    public async get(token: string) {
        let tok;

        try {
            tok = jwt.verify(token, this.key, {
                algorithms: [AUTH_ALGORITHM]
            });

            return tok;
        } catch (e) {
            if (e instanceof jwt.JsonWebTokenError) {
                return { error: 4003 }
            } else if (e instanceof jwt.NotBeforeError) {
                return { error: 4003 }
            } else if (e instanceof jwt.TokenExpiredError) {
                return { error: 4004 }
            } else {
                return { error: 4003 }
            }
        }
    }

    public createUserToken(id: string) {
        return this.create({ data: { id }, expires: AUTH_USER_TOKEN_EXPIRE })
    }
}