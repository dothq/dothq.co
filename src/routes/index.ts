import { Request, Response } from "express";

export default {
    route: '/',
    accepts: ['ALL'],
    handlers: {
        ALL: (req: Request, res: Response) => {
            if(res.silent) return res.end();
            
            res.json({
                ok: true,
                locale: res.lang
            })
        }
    }
}