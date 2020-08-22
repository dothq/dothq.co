const { NEWS_TOKEN_1, NEWS_TOKEN_2, NEWS_TOKEN_3, NEWS_TOKEN_4, NEWS_TOKEN_5 } = require("../../../credentials.json");

const axios = require("axios");

const keys = [NEWS_TOKEN_1, NEWS_TOKEN_2, NEWS_TOKEN_3, NEWS_TOKEN_4, NEWS_TOKEN_5]
var currentKey = 0;

var validKeys = new Set();

keys.forEach(k => {
    validKeys.add(k);
})

const grabNews = (req, res, callback) => {
    axios.get(`http://newsapi.org/v2/top-headlines?country=${req.query.country || "us"}&apiKey=${keys[currentKey]}`)
        .then(resp => {
            
            if(currentKey >= 4) {
                res.json({
                    error: "Exceeded limit."
                })
            }

            const data = resp.data;

            if(data.status == "ok") {
                callback(data);
            } else {
                if(data.code && data.code == "apiKeyExhausted") {
                    validKeys.delete(currentKey);
                    ++currentKey;

                    console.log("Switched to key", currentKey)
    
                    grabNews(req, res, (data) => {
                        const json = data;
                        json.version = "v" + currentKey;
                        res.json(json);
                    })
                } else {
                    res.json({
                        error: "Exceeded limit."
                    })
                }
            }
        })
}

const newsRoute = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    if(req.header("X-Dot-NTP") == "true") {
        grabNews(req, res, (data) => {
            const json = data;
            json.version = "v" + currentKey;
            res.json(json);
        })
    } else {
        res.json({ ok: false, error: 'Page must be Dot NTP' })
    }

}

exports.newsRoute = newsRoute;
