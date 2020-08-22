const { createRoute } = require("./create")
const { loginRoute } = require("./login")
const { meRoute } = require("./me")

const id = {
    create: createRoute,
    login: loginRoute,
    me: meRoute
}

exports.id = id;