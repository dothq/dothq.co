import { Request, Response } from "express";

export default {
    route: '/id/sign-up',
    accepts: ['POST'],
    handlers: {
        POST: (req: Request, res: Response) => {
            if(res.silent) return res.end();
            
            console.log(req.body)
        }
    }
}