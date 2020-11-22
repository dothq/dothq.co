import * as bcrypt from 'bcrypt';

export const encrypt = (text: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(256, (err: Error, salt: string) => {
            if (err) return reject(err);

            bcrypt.hash(text, salt, (err: Error, hash: string) => {
                if (err) return reject(err);
                resolve(hash);
            });
        })
    })
}

export const encryptWithSalt = (text: string, salt: string) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(text, salt, (err: Error, hash: string) => {
            if (err) return reject(err);
            resolve(hash);
        });
    })
}

export const compare = (plain: string, hash: string) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(plain, hash, (err: Error, matches: boolean) => {   
            if (err) return reject(err);

            resolve(matches ? true : false)
        })
    });
}