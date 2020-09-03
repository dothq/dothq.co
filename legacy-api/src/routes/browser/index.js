const { newsRoute } = require("./news");
const { limelightRoute } = require("./limelight");
const { ipRoute } = require("./ip");
const { certificateRoute } = require("./certificate");

const browser = {
    news: newsRoute,
    limelight: limelightRoute,
    ip: ipRoute,
    certificate: certificateRoute
}

exports.browser = browser;