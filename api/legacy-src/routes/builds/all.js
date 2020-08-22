const { throwError } = require("../../error")

const { db } = require("../../mongo")

const buildSchema = require('../../schemas/build');
const makeModel = require("../../factory")

const { makeId } = require("../../uuid")

const users = require("../../classes/users")

const allRoute = async (req, res) => {
    const build = makeModel(db.builds, "Build", buildSchema)

    var all = []

    build.find({ __v: 0 }, (e, docs) => {
        if(docs[0]) {
            docs.forEach(json => {
                const unlocks = new Date(json.unlocksAt).getTime();
                
                json.downloadUrl = new Date().getTime() >= unlocks ? json.downloadUrl : ""
    
                all.push({
                    supportedOs: json.supportedOs,
                    id: json.id,
                    version: json.version,
                    productName: json.productName,
                    unlocksAt: json.unlocksAt,
                    downloadUrl: json.downloadUrl,
                    dateUploaded: json.dateUploaded
                })
            })

            res.json({
                results: all
            })
        } else {
            return throwError(3000, `No builds found.`, res)
        }
    })
}

exports.allRoute = allRoute;