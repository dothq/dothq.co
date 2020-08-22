const requestCountry = require('request-country');

const whereamiRoute = (req, res) => {
    res.json({ ip: req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress })
}

exports.whereamiRoute = whereamiRoute;