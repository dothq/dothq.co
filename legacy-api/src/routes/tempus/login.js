const axios = require("axios")

const cookie = require('cookie');

const { throwError } = require("../../error")

const loginRoute = async (req, res) => {
    if(!req.body) return throwError(3000, `Body is missing.`, res)
    if(!req.body.email) return throwError(3000, `"email" is missing from body.`, res)
    if(!req.body.password) return throwError(3000, `"password" is missing from body.`, res)
    
    const _ = await axios.post("https://mail.dothq.co/SOGo/connect", { userName: req.body.email, password: req.body.password, rememberMe: 1 }, { withCredentials: true })

    res.json({
        token: encodeURIComponent(cookie.parse(_.headers['set-cookie'].find(c => c.includes("0xHIGHFLYxSOGo")))['0xHIGHFLYxSOGo']),
        ok: true
    })

}

exports.loginRoute = loginRoute;