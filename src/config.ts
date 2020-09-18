import { resolve } from "path";
import * as credentials from '../credentials.json';

export const API_PORT = 4000;
export const API_DATABASE_URI = `mongodb+srv://${credentials.DB_USERNAME}:${credentials.DB_PASSWORD}@enderdev.lvjah.mongodb.net/dothq?retryWrites=true&w=majority`

export const API_PROD_URL = "https://dothq.co/api";
export const API_DEV_URL = `http://localhost:${API_PORT}/api`;
export const API_CORS_ORIGINS = ["https://dothq.co", "http://localhost:8000"]

export const LOCALE_DEFAULT = "en-US";
export const LOCALE_DIRECTORY = resolve(__dirname, "locales");

export const ROUTES_DIRECTORY = resolve(__dirname, "routes");

export const GITHUB_REPOSITORY_URL = "https://github.com/dothq/dothq.co"

export const LOG_CTX_COLOURS = {
    info: 'blue',
    warning: 'yellow',
    error: 'red',
    success: 'green',
    debug: 'gray'
}