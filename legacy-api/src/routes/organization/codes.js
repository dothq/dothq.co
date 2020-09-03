const { throwError } = require("../../error")

const { db } = require("../../mongo")

const codeSchema = require('../../schemas/organization-code');
const idSchema = require('../../schemas/id');
const makeModel = require("../../factory")

const { makeId } = require("../../uuid")

const users = require("../../classes/users")

const key = require("../../../credentials.json")['ORGCODE_KEY'];

const codesRoute = async (req, res, user) => {
    const code = makeModel(db.organization, "business-codes", codeSchema)

    if(req.method == "GET" && req.params.code) {
        code.find({ id: req.params.code }, async (e, docs) => {
            if(docs[0]) {
                const orgCode = docs[0]

                if(orgCode.expires <= Date.now()) return throwError(3000, `"code" expired.`, res)

                const user = await users.getUserById(orgCode.appliesTo)

                delete user.ok
                delete user.email // The user needs to verify this manually.

                res.json({
                    ok: true,
                    appliesTo: user,
                    expires: orgCode.expires,
                    id: orgCode.id
                })
            } else {
                res.json({
                    ok: false,
                    error: `Organization code does not exist.`
                })
            }
        })
    }   

    if(req.method == "POST" && !req.params.code && req.body) {
        if(!req.body.key) return throwError(3000, `"key" is missing from body.`, res)
        if(req.body.key !== key) return throwError(3000, `"key" is incorrect.`, res)
        if(!req.body.appliesTo) return throwError(3000, `"appliesTo" is missing from body.`, res)

        const letters = "abcdefghijklmnopqrstuvwxyz"
        let id = ""
        const l = [...Array(32)];

        l.map(i => { id += letters.split("")[Math.floor(Math.random() * letters.split("").length)] })

        const codeRequest = new code({
            id,
            expires: new Date().setHours(new Date().getHours() + 4),
            appliesTo: req.body.appliesTo
        })

        codeRequest.save().then(i => {
            res.json({
                ok: true,
                appliesTo: codeRequest.toObject().appliesTo,
                expires: codeRequest.toObject().expires,
                id: codeRequest.toObject().id,
            })
        })
    }  

}

exports.codesRoute = codesRoute;