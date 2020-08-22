const { deprecatedRoute } = require("./deprecated");
const { shortenedRoute } = require("./shortened");
const { betaRoute } = require("./beta");
const { githubSSORoute } = require("./github");

const api = {
    deprecated: deprecatedRoute,
    shortened: shortenedRoute,
    beta: betaRoute,
    githubSSO: githubSSORoute
}

exports.api = api;