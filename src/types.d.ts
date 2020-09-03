import * as express from 'express';

export type Server = express.Application & {
    _listen: any;
}

export interface Route {
    route: string,
    accepts: string[],
    handlers: { 
        GET?: (req: Request, res: Response) => void, 
        POST?: (req: Request, res: Response) => void,
        PUT?: (req: Request, res: Response) => void,
        DELETE?: (req: Request, res: Response) => void,
        HEAD?: (req: Request, res: Response) => void,
        LOCK?: (req: Request, res: Response) => void,
        MERGE?: (req: Request, res: Response) => void,
        MKACTIVITY?: (req: Request, res: Response) => void,
        COPY?: (req: Request, res: Response) => void,
        CHECKOUT?: (req: Request, res: Response) => void,
        MKCOL?: (req: Request, res: Response) => void,
        MOVE?: (req: Request, res: Response) => void,
        ['M-SEARCH']?: (req: Request, res: Response) => void,
        NOTIFY?: (req: Request, res: Response) => void,
        OPTIONS?: (req: Request, res: Response) => void,
        PATCH?: (req: Request, res: Response) => void,
        PURGE?: (req: Request, res: Response) => void,
        REPORT?: (req: Request, res: Response) => void,
        SEARCH?: (req: Request, res: Response) => void,
        SUBSCRIBE?: (req: Request, res: Response) => void,
        TRACE?: (req: Request, res: Response) => void,
        UNLOCK?: (req: Request, res: Response) => void,
        UNSUBSCRIBE?: (req: Request, res: Response) => void
    }
}