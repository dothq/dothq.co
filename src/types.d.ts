import * as express from 'express';
import { Req, Res } from '../types';

export type Server = express.Application & {
    _listen: any;
}

export interface Route {
    route: string,
    accepts: string[],
    handlers: { 
        GET?: (req: Req, res: Res) => void, 
        POST?: (req: Req, res: Res) => void,
        PUT?: (req: Req, res: Res) => void,
        DELETE?: (req: Req, res: Res) => void,
        HEAD?: (req: Req, res: Res) => void,
        LOCK?: (req: Req, res: Res) => void,
        MERGE?: (req: Req, res: Res) => void,
        MKACTIVITY?: (req: Req, res: Res) => void,
        COPY?: (req: Req, res: Res) => void,
        CHECKOUT?: (req: Req, res: Res) => void,
        MKCOL?: (req: Req, res: Res) => void,
        MOVE?: (req: Req, res: Res) => void,
        ['M-SEARCH']?: (req: Req, res: Res) => void,
        NOTIFY?: (req: Req, res: Res) => void,
        OPTIONS?: (req: Req, res: Res) => void,
        PATCH?: (req: Req, res: Res) => void,
        PURGE?: (req: Req, res: Res) => void,
        REPORT?: (req: Req, res: Res) => void,
        SEARCH?: (req: Req, res: Res) => void,
        SUBSCRIBE?: (req: Req, res: Res) => void,
        TRACE?: (req: Req, res: Res) => void,
        UNLOCK?: (req: Req, res: Res) => void,
        UNSUBSCRIBE?: (req: Req, res: Res) => void
    }
}

export interface ErrorJSON {
    ok: boolean;
    message: string;
    code: number;
}

export type Algorithm =
    "HS256" | "HS384" | "HS512" |
    "RS256" | "RS384" | "RS512" |
    "ES256" | "ES384" | "ES512" |
    "PS256" | "PS384" | "PS512" |
    "none";