import { resolve } from "path";
import * as credentials from '../credentials.json';

import { Algorithms } from "./types";

export const API_PORT = 4000;
export const API_DATABASE_URI = `mongodb+srv://${credentials.DB_USERNAME}:${credentials.DB_PASSWORD}@enderdev.lvjah.mongodb.net/dothq?retryWrites=true&w=majority`

export const API_PROD_URL = "https://dothq.co/api";
export const API_DEV_URL = `http://localhost:${API_PORT}/api`;
export const API_CORS_ORIGINS = ["https://dothq.co", "http://localhost:8000"]

export const AUTH_SECRET_KEY = resolve(process.cwd(), "private.key");
export const AUTH_KEY_ISSUER = "DTHQ"; // Issuer should be 4 characters or less
export const AUTH_ALGORITHM: Algorithms = "aes-256-cbc"; // WARNING: This will break all existing keys if you change this.
export const AUTH_KEY_LENGTH = [16, 32];

export const LOCALE_DEFAULT = "en-US";
export const LOCALE_DIRECTORY = resolve(__dirname, "locales");

export const ROUTES_DIRECTORY = resolve(__dirname, "routes");

export const GITHUB_REPOSITORY_URL = "https://github.com/dothq/dothq.co"

export const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
export const PASSWORD_REGEX = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[!@#$%^&*]))|((?=.*[a-z])(?=.*[!@#$%^&*]))|((?=.*[0-9])(?=.*[!@#$%^&*])))(?=.{6,})/;
export const USERNAME_REGEX = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;

export const LOG_CTX_COLOURS = {
    info: 'blue',
    warning: 'yellow',
    error: 'red',
    success: 'green',
    debug: 'gray'
}