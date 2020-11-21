import config from "../../dot.config"

import * as checkPasswordStrength from "check-password-strength";

export const validEmail = (email: string) => {
    return config.regex.email.test(email);
}

export const validUsername = (username: string) => {
    return username.length >= 4 && config.regex.username.test(username);
}

export const validPassword = (password: string, maxStrength?: number) => {
    try {
        return checkPasswordStrength(password).id;
    } catch(e) {
        return 0;
    }
}