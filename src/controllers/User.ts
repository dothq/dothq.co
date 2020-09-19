import APIController from ".";

export default class UserController {
    public api: APIController = new APIController();

    public actions = {
        getUserSelf: "/id/user/me",
        getUser: "/id/user/:id",
        getPasswordStrength: "/id/password-strength",
        createUser: "/id/sign-up",
        createLoginSession: "/id/sign-in"
    }

    get(id: string) {
        const { getUser } = this.actions;

        return this.api.get(getUser, [id])
    }

    create({ email, password, username }: { email: string, password: string, username: string }) {
        const { createUser } = this.actions;

        return this.api.post(createUser, { email, password, username })
    }
    
    login({ email, password }: { email: string, password: string }) {
        const { createLoginSession } = this.actions;

        password = Buffer.from(Buffer.from(Buffer.from(Buffer.from(password).toString("base64")).toString("base64")).toString("base64")).toString("base64")

        return this.api.post(createLoginSession, { email, password })
    }

    getPasswordStrength(password: string) {
        const { getPasswordStrength } = this.actions;

        return this.api.post(getPasswordStrength, { password })
    }
}