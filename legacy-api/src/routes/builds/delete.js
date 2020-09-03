const users = require("../../classes/users")

const { throwError } = require("../../error")

const { db } = require("../../mongo")

const buildSchema = require('../../schemas/build');
const makeModel = require("../../factory")

const deleteRoute = async (req, res) => {
    if(req.headers.authorization) {
        user = await users.getMe(req.headers.authorization.split("Bearer ")[1])
        if(user && !user.isEmployee) return throwError(3000, `You must be logged in to complete this action.`, res)
    } else {
        return throwError(3000, `You must be logged in to complete this action.`, res)
    }

    if(!req.params.id) return throwError(3000, `"id" is missing.`, res)

    const build = makeModel(db.builds, "Build", buildSchema)

    build.deleteMany({ id: req.params.id }, (e, resp) => {
        res.json({
            ok: resp.deletedCount !== 0
        })
    })
}

exports.deleteRoute = deleteRoute;