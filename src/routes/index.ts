import { Request, Response } from "express";

export default {
    route: '/',
    accepts: ['ALL'],
    handlers: {
        ALL: (req: Request, res: Response, locale: string, silent: boolean) => {
            if(silent) return res.end();
            
            res.json({
                ok: true,
                locale
            })
        }
    }
}