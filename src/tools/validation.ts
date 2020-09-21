import { EMAIL_REGEX, USERNAME_REGEX } from "../config"

import * as checkPasswordStrength from "check-password-strength";

export const validEmail = (email: string) => {
    return EMAIL_REGEX.test(email);
}

export const validUsername = (username: string) => {
    return username.length >= 4 && USERNAME_REGEX.test(username);
}

export const validPassword = (password: string) => {
    return checkPasswordStrength(password).id >= 2;
}