const { createRoute } = require("./create")
const { deleteRoute } = require("./delete")
const { infoRoute } = require("./info")
const { allRoute } = require("./all")

const builds = {
    create: createRoute,
    delete: deleteRoute,
    info: infoRoute,
    all: allRoute
}

exports.builds = builds;