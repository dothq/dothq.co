const { podcastsRoute } = require("./podcasts");
const { whereamiRoute } = require("./whereami");

const ichos = {
    podcasts: podcastsRoute,
    whereami: whereamiRoute
}

exports.ichos = ichos;