import * as express from 'express';
import { Controller } from './src';

declare module '*.png'
declare module '*.svg'

export interface Req extends express.Request {}
export interface Res extends express.Response {
    api: Controller;
    silent: boolean;
    lang: string;
}

export interface Route {
    route: string,
    accepts: string[],
    locationOnPath?: string,
    handlers: {
        [key in string]: (req: Req, res: Res) => void
    }
}