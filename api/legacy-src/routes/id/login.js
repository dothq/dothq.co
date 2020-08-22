const { throwError } = require("../../error")

const { db } = require("../../mongo")

const idSchema = require('../../schemas/id');
const makeModel = require("../../factory")

const { comparePassword } = require("../../encrypt")

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

const key = require("../../../credentials.json")['TOKEN_ENC'];

const jwt = require('node-webtokens');

const loginRoute = (req, res) => {
    // res.header("Access-Control-Allow-Origin", "https://alpha.dothq.co");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if(!req.body) return throwError(3000, `Body is missing.`, res)
    if(!req.body.email) return throwError(3000, `"email" is missing from body.`, res)
    if(!req.body.password) return throwError(3000, `"password" is missing from body.`, res)

    if(emailRegex.test(req.body.email) == false) return throwError(3000, `"email" is not valid type "email".`, res)
    if(passwordRegex.test(req.body.password) == false) return throwError(3000, `"password" must be longer than 8 characters, must include one uppercase character, one lowercase character and one number minimum.`, res)
    if(req.body.password.length <= 8) return throwError(3000, `"password" must be 8 characters or longer.`, res)
    if(req.body.password.length >= 82) return throwError(3000, `"password" must be 82 characters or less.`, res)

    const id = makeModel(db.users, "ID", idSchema)

    id.find({ email: req.body.email }, (err, documents) => {
        if(documents.length == 0) return throwError(3000, `User could not be found with the email "${req.body.email}".`, res)

        var user = documents[0]

        comparePassword(req.body.password, user.password, async (err, matches) => {
            if(matches == false) return throwError(3000, `"password" does not match.`, res)

            if(req.body.code) {
                if(req.body.code == user.verificationCode) {
                    await id.updateMany({}, { $set: { verified: true }, $unset: { verificationCode: user.verificationCode } });
                    user.verified = true;
                    user.verificationCode = undefined
                }
            }

            const token = jwt.generate('PBES2-HS512+A256KW', 'A256GCM', { id: user.id, exp: Date.now()+86400000 }, key)
            console.log({ id: user.id, exp: Date.now()+86400000 })

            res.json({
                ok: true,
                access_token: token
            })
        })
    })

}

exports.loginRoute = loginRoute;