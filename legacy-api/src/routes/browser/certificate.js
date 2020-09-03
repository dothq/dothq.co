const axios = require("axios")
const https = require("https")
const TimeAgo = require("javascript-time-ago")

const en = require('javascript-time-ago/locale/en')
 
TimeAgo.addLocale(en)

const certificateRoute = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    axios.get("https://" + req.params.url, { httpsAgent: new https.Agent({ rejectUnauthorized: false }) })
        .then(resp => {
            const cert = resp.request.socket.getPeerCertificate();

            const timeAgo = new TimeAgo('en-US')
 
            const certificateExpired = timeAgo.format(new Date(cert.valid_to))

            res.json({ certificateExpired })
        })
}

exports.certificateRoute = certificateRoute;