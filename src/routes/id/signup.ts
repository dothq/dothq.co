import { Req, Res } from "../../../types";

export default {
    route: '/id/sign-up',
    accepts: ['POST'],
    handlers: {
        POST: (req: Req, res: Res) => {
            if(res.silent) return res.end();
            
            console.log(req.body)
        }
    }
}