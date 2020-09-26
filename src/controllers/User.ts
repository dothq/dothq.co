import APIController from ".";

import * as checkPasswordStrength from "check-password-strength";

export default class UserController {
    static api: APIController = new APIController();

    static actions = {
        getUserSelf: "/id/user/me",
        getUser: "/id/user/:id",
        createUser: "/id/sign-up",
        createLoginSession: "/id/sign-in"
    }

    static get(id: string) {
        const { getUser } = this.actions;

        return this.api.get(getUser, [id])
    }

    static create({ email, password, username }: { email: string, password: string, username: string; }) {
        const { createUser } = this.actions;

        return this.api.post(createUser, { email, password, username })
    }
    
    static login({ email, password }: { email: string, password: string }) {
        const { createLoginSession } = this.actions;

        return this.api.post(createLoginSession, { email, password })
    }

    static getPasswordStrength(password: string) {
        return new Promise((resolve) => {
            if(password.length == 0) return resolve(-1);

            const { id } = checkPasswordStrength(password);

            return resolve(id);
        })
    }
}