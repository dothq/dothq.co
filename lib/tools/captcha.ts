import * as hcaptcha from 'hcaptcha';

import config from '../../dot.config';

export const verifyCaptcha = (challengeToken: string) => {
    return new Promise(async (resolve, reject) => {
        const verified = await hcaptcha.verify(config.credentials.hcaptcha.key, challengeToken);

        resolve(verified.success)
    })
}