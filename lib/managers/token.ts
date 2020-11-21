import * as jwt from 'jsonwebtoken';

import { readFileSync } from 'fs';

import config from '../../dot.config';

export class TokenManager {
    private key: string;

    constructor() {
        this.key = readFileSync(config.auth.key, "utf-8");
    }

    public create({ data, expires }: { data: any, expires: string | number | any }) {
        return jwt.sign(data, this.key, {
            expiresIn: expires,
            algorithm: (config.auth.algorithm as any)
        });
    }

    public async get(token: string) {
        let tok;

        try {
            tok = jwt.verify(token, this.key, {
                algorithms: [(config.auth.algorithm as any)]
            });
        } catch (e) {
            if(e.message == "jwt expired") return { error: 4004 }
            else return { error: 4003 } 
        }
        
        return tok;
    }

    public createUserToken(id: string) {
        return this.create({ data: { id }, expires: config.auth.tokenExpires })
    }
}