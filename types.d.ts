import * as express from 'express';
import { Controller } from './src';

declare module '*.png'
declare module '*.svg'

export interface Req extends express.Request {}
export interface Res extends express.Response {
    api: Controller;
    lang: string;
}

export interface Route {
    route: string,
    accepts: string[],
    flags?: {
        requireChallenge?: boolean
    },
    bodySchema: any,
    locationOnPath?: string,
    handlers: {
        [key in string]: (req: Req, res: Res) => void
    }
}