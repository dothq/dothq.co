import { resolve } from 'path';

import credentials from './dot.credentials';

interface Config {
    credentials: {
        [key: string]: {
            issuer: string,
            uri: string,
            key: string
        }
    },
    general: {
        githubRepository: string,
        allowedAvatarMimes: string[],
    },
    locale: {
        default: string,
        localeData: string
    },
    api: {
        port: number,
        origins: string[],
        uris: {
            [key: string]: any
        },
        routesData: string
    },
    auth: {
        key: string,
        algorithm: Algorithm,
        tokenExpires: string,
        redirectAfterLogin: string
    },
    regex: {
        email: RegExp,
        password: RegExp,
        username: RegExp,
        token: RegExp
    },
    log: {
        info: string,
        warning: string,
        error: string,
        success: string,
        debug: string
    }
}

const config: Config = {
    credentials,
    general: {
        githubRepository: "https://github.com/dothq/dothq.co",
        allowedAvatarMimes: ["png", "jpg"],
    },
    locale: {
        default: "en-US",
        localeData: resolve(__dirname, "src", "locales")
    },
    api: {
        port: 4000,
        origins: ["https://dothq.co", "http://localhost:8000"],
        uris: { 
            prod: "https://dothq.co/api",
            dev: () => { return `http://localhost:${config.api.port}` } 
        },
        routesData: resolve(__dirname, "src", "routes")
    },
    auth: {
        key: resolve(process.cwd(), "secret.key"),
        algorithm: ("HS512" as unknown as Algorithm),
        tokenExpires: "2d",
        redirectAfterLogin: "/"
    },
    regex: {
        email: /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
        password: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[!@#$%^&*]))|((?=.*[a-z])(?=.*[!@#$%^&*]))|((?=.*[0-9])(?=.*[!@#$%^&*])))(?=.{6,})/,
        username: /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/,
        token: /Bearer [\w\d]{10,}/
    },
    log: {
        info: 'blue',
        warning: 'yellow',
        error: 'red',
        success: 'green',
        debug: 'gray'
    }
}

export default config;