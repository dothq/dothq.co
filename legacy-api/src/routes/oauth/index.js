const { authorizeRoute } = require("./authorize")
const { tokenRoute } = require("./token")

const oauth = {
    authorize: authorizeRoute,
    token: tokenRoute
}

exports.oauth = oauth;