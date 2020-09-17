import * as hcaptcha from 'hcaptcha';

import * as credentials from '../../credentials.json';

export const verifyCaptcha = (challengeToken: string) => {
    return new Promise(async (resolve, reject) => {
        const verified = await hcaptcha.verify(credentials.HCAPTCHA_SECRET, challengeToken);

        resolve(verified.success)
    })
}