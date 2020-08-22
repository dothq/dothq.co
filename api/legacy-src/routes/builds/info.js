const { throwError } = require("../../error")

const { db } = require("../../mongo")

const buildSchema = require('../../schemas/build');
const makeModel = require("../../factory")

const { makeId } = require("../../uuid")

const users = require("../../classes/users")

const infoRoute = async (req, res) => {
    if(!req.params.id) return throwError(3000, `"id" is missing.`, res)

    const build = makeModel(db.builds, "Build", buildSchema)

    build.find({ id: req.params.id }, (e, docs) => {
        if(docs[0]) {
            const unlocks = new Date(docs[0].unlocksAt).getTime();

            const json = docs[0]
            
            json.downloadUrl = new Date().getTime() >= unlocks ? json.downloadUrl : ""

            res.json({
                supportedOs: json.supportedOs,
                id: json.id,
                version: json.version,
                productName: json.productName,
                unlocksAt: json.unlocksAt,
                downloadUrl: json.downloadUrl,
                dateUploaded: json.dateUploaded
            })
        } else {
            return throwError(3000, `Build with id "${req.params.id}" does not exist.`, res)
        }
    })
}

exports.infoRoute = infoRoute;