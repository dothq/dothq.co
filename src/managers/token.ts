import * as crypto from 'crypto';

import ms = require('ms');

import { AUTH_ALGORITHM, AUTH_KEY_ISSUER, AUTH_KEY_LENGTH } from '../config';

export class TokenManager {
    private key;
    private iv;

    constructor() {
        this.key = crypto.randomBytes(AUTH_KEY_LENGTH[1]);
        this.iv = crypto.randomBytes(AUTH_KEY_LENGTH[0]);
    }

    private encryptToken(token: string) {
        const ci = crypto.createCipheriv(AUTH_ALGORITHM, Buffer.from(this.key), this.iv);

        const tok = (Buffer.concat([ci.update(token), ci.final()])).toString("hex");

        return { 
            iv: this.iv.toString('hex'),
            data: tok
        };
    }

    private decryptToken(token: { iv: string, data: string }) {
        const iv = Buffer.from(token.iv, 'hex');
        const data = Buffer.from(token.data, 'hex');

        const di = crypto.createDecipheriv(AUTH_ALGORITHM, Buffer.from(this.key), iv);

        return (Buffer.concat([di.update(data), di.final()])).toString();
    }

    private connect(data: any) {
        return [...Object.entries(data)].map(([key, part]) => Buffer.from(`${key}=${part}`).toString("base64")).join(".")
    }

    private disconnect(data: any) {
        return [...data.split(".")].map(part => {
            if(!part) return;

            const decoded = Buffer.from(part, "base64").toString("utf-8");

            return { key: decoded.split("=")[0], value: decoded.split(decoded.split("=")[0] + "=")[1] }
        })
    }

    public create({ data, expires }: { data: any, expires: string | number | any }) {
        const expire = ms(expires);

        data.exp = Date.now() + expire;
        data.isr = AUTH_KEY_ISSUER;

        const parts = this.encryptToken(this.connect(data));

        return `${parts.iv}.${parts.data}`;
    }

    public get(token: string) {
        const base64 = this.decryptToken({ iv: token.split(".")[0], data: token.split(".")[1] });
        const spread = this.disconnect(base64);

        const issuerMatches = spread.find(s => s.key == "isr" && s.value == AUTH_KEY_ISSUER);

        if(!issuerMatches) return;

        return this.disconnect(base64);
    }
}