const { codesRoute } = require("./codes");
const { verifyRoute } = require("./verify");

const organization = {
    codes: codesRoute,
    verify: verifyRoute
}

exports.organization = organization;