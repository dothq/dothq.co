import * as bcrypt from 'bcrypt';

export const encrypt = (text: string): string => {
    return bcrypt.genSalt(256, (err: Error, salt: string) => {
        if (err) throw err;
    
        bcrypt.hash(text, salt, (err: Error, hash: string) => {
            if (err) throw err;
            return hash;
        });
    });
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
    return bcrypt.compare(plain, hash, (err: Error, matches: boolean) => {   
        if (err) throw err;

        return matches ? true : false;
    });
}