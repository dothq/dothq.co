const axios = require("axios");

const client_secret = require("../../../credentials.json")['GITHUB_SECRET'];

const { throwError } = require("../../error")

// ignore this shitty code
const githubSSORoute = (req, res) => {
    if(!req.body) return throwError(3000, `Body required.`, res)
    if(!req.body.code) return throwError(3000, `"code" missing from body.`, res)

    axios.post("https://github.com/login/oauth/access_token", {
        client_id: "8e8c007e4bd6166e8944",
        client_secret,
        code: req.body.code,
        redirect_uri: "https://dothq.co/sso/github-onboard"
    }, { headers: { "accept": "application/json" } }).then(async resp => {
        if(resp.data.error) return res.json({ ok: false, error: resp.data.error })

        var access_token = resp.data.access_token

        const data = {
            username: "",
            email: "",
            avatar: ""
        }

        const userRes = await axios.get("https://api.github.com/user", {
            headers: { "authorization": `token ${resp.data.access_token}`, "accept": "application/json" }
        })

        if(userRes.data.login) data.username = userRes.data.login
        if(userRes.data.avatar_url) data.avatar = userRes.data.avatar_url + "&size=50"

        const avatar = await axios.get(data.avatar, { responseType: "arraybuffer" })

        data.avatar = "data:" + avatar.headers["content-type"] + ";base64," + Buffer.from(avatar.data).toString('base64');

        const emailRes = await axios.get("https://api.github.com/user/public_emails", {
            headers: { "authorization": `token ${resp.data.access_token}`, "accept": "application/json" }
        })

        if(emailRes.data[0] && emailRes.data[0].email) data.email = emailRes.data[0].email

        res.json({
            data,
            access_token
        })
    }).catch(e => e)
}

exports.githubSSORoute = githubSSORoute;