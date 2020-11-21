import { Req, Res } from "../../types";

export default {
    route: '/',
    accepts: ['ALL'],
    handlers: {
        ALL: (req: Req, res: Res) => {
            res.json({
                ok: true,
                locale: res.lang
            })
        }
    }
}