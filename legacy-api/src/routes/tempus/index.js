const { inboxRoute } = require("./inbox");
const { loginRoute } = require("./login");

const tempus = {
    inbox: inboxRoute,
    login: loginRoute
}

exports.tempus = tempus;