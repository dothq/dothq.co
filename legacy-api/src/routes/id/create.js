const { throwError } = require("../../error")

const { db } = require("../../mongo")

const idSchema = require('../../schemas/id');
const makeModel = require("../../factory")

const { makeId } = require("../../uuid")
const { cryptPassword } = require("../../encrypt")
const chancejs = require("chance");

var chance = new chancejs();

const { sendVerificationEmail } = require("../../../mail")

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
const usernameRegex = /^([a-zA-Z0-9\u0600-\u06FF\u0660-\u0669\u06F0-\u06F9 _.-]+)$/

const createRoute = (req, res) => {
    if(!req.body) return throwError(3000, `Body is missing.`, res)
    if(!req.body.email) return throwError(3000, `"email" is missing from body.`, res)
    if(!req.body.password) return throwError(3000, `"password" is missing from body.`, res)
    if(!req.body.username) return throwError(3000, `"username" is missing from body.`, res)

    if(emailRegex.test(req.body.email) == false) return throwError(3000, `"email" is not valid type "email".`, res)
    if(passwordRegex.test(req.body.password) == false) return throwError(3000, `"password" must be longer than 8 characters, must include one uppercase character, one lowercase character and one number minimum.`, res)
    if(usernameRegex.test(req.body.username) == false) return throwError(3000, `"username" must only contain alphanumeric characters`, res)
    if(req.body.password.length <= 8) return throwError(3000, `"password" must be 8 characters or longer.`, res)
    if(req.body.password.length >= 82) return throwError(3000, `"password" must be 82 characters or less.`, res)

    if(req.body.username.length <= 2) return throwError(3000, `"username" must be 2 characters or longer.`, res)
    if(req.body.username.length >= 28) return throwError(3000, `"username" must be 28 characters or less.`, res)

    const id = makeModel(db.users, "ID", idSchema)

    id.find({ $or: [
        {
            email: req.body.email
        },
        {
            username: req.body.username
        }]}, (err, documents) => {
            if(documents.length !== 0) {
                return throwError(3000, `User already exists.`, res)
            } else {
                cryptPassword(req.body.password, (error, hash) => {
                    if(error) res.json({})

                    const code = chance.unique(chance.natural, 1, { min: 10000, max: 99999 })[0];

                    const idRequest = new id({
                        id: makeId(),
                        email: req.body.email,
                        password: hash,
                        username: req.body.username,
                        dateCreated: Date.now(),
                        verified: true,
                        avatar: 'https://cdn.dothq.co/assets/unknown.png',
                        authorizedApps: []
                    })
                
                    idRequest.save().then(i => {
                        res.json({
                            ok: true,
                            id: idRequest.toObject().id,
                            verified: idRequest.toObject().verified
                        })
                    })
                    
                    // sendVerificationEmail(idRequest.toObject().email, code)
                })

            }
    })

}

exports.createRoute = createRoute;