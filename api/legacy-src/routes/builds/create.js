const { throwError } = require("../../error")

const { db } = require("../../mongo")

const buildSchema = require('../../schemas/build');
const makeModel = require("../../factory")

const { makeId } = require("../../uuid")

const users = require("../../classes/users")

const createRoute = async (req, res, user) => {
    if(req.headers.authorization) {
        user = await users.getMe(req.headers.authorization.split("Bearer ")[1])
        if(user && !user.isEmployee) return throwError(3000, `You must be logged in to complete this action.`, res)
    } else {
        return throwError(3000, `You must be logged in to complete this action.`, res)
    }

    if(!req.body) return throwError(3000, `Body is missing.`, res)
    if(!req.body.productName) return throwError(3000, `"productName" is missing from body.`, res)
    if(!req.body.version) return throwError(3000, `"version" is missing from body.`, res)
    if(!req.body.supportedOs) return throwError(3000, `"supportedOs" is missing from body.`, res)
    if(!req.body.unlocksAt) return throwError(3000, `"unlocksAt" is missing from body.`, res)

    req.body.id = makeId()
    req.body.downloadUrl = `https://cdn.dothq.co/builds/${req.body.version}/Install ${req.body.productName} ${req.body.version}`
    req.body.dateUploaded = new Date().toISOString()

    const build = makeModel(db.builds, "Build", buildSchema)

    build.find({ version: req.body.version }, (e, docs) => {
        if(docs[0]) throwError(3000, `A build for that version already exists.`, res)
        else {
            const buildRequest = new build(req.body)

            buildRequest.save().then(i => {
                res.json({
                    ok: true,
                    id: buildRequest.toObject().id,
                })
            })
        }
    })

}

exports.createRoute = createRoute;