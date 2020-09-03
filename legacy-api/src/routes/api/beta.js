const { DOWNLOAD_BUCKET_URI } = require("../../../credentials.json");

const axios = require("axios");

const betaRoute = (req, res) => {
    const unlocksAt = DOWNLOAD_BUCKET_URI + req.query.folder + "/" + "UNLOCK.txt";

    console.log(unlocksAt)

    axios.get(unlocksAt, { method: 'GET', responseType: 'blob' })
        .then(resp => {
            if(!isNaN(resp.data)) {
                const unlocks = resp.data;

                const product = req.query.file.split("Install ")[1].split(" ")[0] + " " + req.query.file.split("Install ")[1].split(" ")[1].replace(/-/g, "").split(/[0-9]/)[0]
                const version = req.query.file.match(/\d+/g).join(".");

                if(new Date().getTime() >= unlocks) {
                    res.json({
                        ok: true,
                        details: {
                            product,
                            version
                        },
                        download: Buffer.from(encodeURIComponent(DOWNLOAD_BUCKET_URI + req.query.folder + "/" + encodeURIComponent(req.query.file))).toString('base64')
                    })
                } else {
                    res.json({
                        ok: false,
                        details: {
                            product,
                            version
                        },
                        download: ""
                    })
                }
            }
        })


}

exports.betaRoute = betaRoute;