const { throwError } = require("../../error")

const { db } = require("../../mongo")

const appSchema = require('../../schemas/app');
const idSchema = require('../../schemas/id');
const makeModel = require("../../factory")

const Cryptr = require('cryptr');
const cryptr = new Cryptr(require("../../../credentials.json")['TOKEN_ENC']);

const key = require("../../../credentials.json")['TOKEN_ENC'];

const jwt = require('node-webtokens');

const users = require("../../classes/users")

const urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/

const authorizeRoute = (req, res) => {
    if(req.method == "GET") {
        if(req.query.error) {
            return require("../../views/authorize").authorize(req, res, {}, true)
        }

        if(!req.query.client_id) return throwError(4000, `"client_id" parameter missing.`, res)
        if(!req.query.redirect_uri) return throwError(4000, `"redirect_uri" parameter missing.`, res)
        if(!req.query.response_type) return throwError(4000, `"response_type" parameter missing.`, res)
        if(req.query.response_type !== "code") return throwError(4000, `"response_type" parameter value incorrect.`, res)
        if(!req.query.scopes) return throwError(4000, `"scopes" parameter missing.`, res)
        if(req.query.scopes.split(",")[0] == "") return throwError(4000, `"scopes" parameter value incorrect.`, res)

        if(!req.query.redirect_uri.split("://")[1].startsWith("localhost")) {
            if(urlRegex.test(req.query.redirect_uri) == false) return throwError(4000, `"redirect_uri" parameter is not a valid URL.`, res)
        }
        
        const application = makeModel(db.oauth, "App", appSchema);

        application.find({ "oauth.clientId": req.query.client_id }, async (err, doc) => {
            const app = doc[0]
            if(!app) return throwError(4000, `Application with the "client_id" of "${req.query.client_id}" does not exist.`, res)
            if(app.oauth.clientId !== req.query.client_id) return throwError(4000, `Application with the "client_id" of "${req.query.client_id}" does not exist.`, res)
            if(!app.oauth.redirectUri.includes(req.query.redirect_uri)) return throwError(4000, `Invalid "redirect_uri" for application with id of "${req.query.client_id}".`, res)
            if(app.oauth.scopes.sort().toString() !== req.query.scopes.split(",").sort().toString()) return throwError(4000, `Invalid "scopes" for application with id of "${req.query.client_id}".`, res)

            app.oauth.scopes.push("send_passwords")

            const appObj = app.toObject();

            if(req.cookies.userToken) {
                appObj.userToken = req.cookies.userToken
                appObj.user = await users.getMe(req.cookies.userToken)
            } else {
                appObj.userToken = null
                appObj.user = {}
            }

            if(!!appObj.user && appObj.user.ok == true) {
                appObj.title = `Authorize ${app.application.name}`;

                require("../../views/authorize").authorize(req, res, appObj)
            } else {
                appObj.title = `Login to your Dot ID`;

                require("../../views/authorize").login(req, res, appObj)
            }
        })
    } else if(req.method == "POST") {
        if(!req.query.client_id) return throwError(4000, `"client_id" parameter missing.`, res)
        if(!req.query.redirect_uri) return throwError(4000, `"redirect_uri" parameter missing.`, res)
        if(!req.query.response_type) return throwError(4000, `"response_type" parameter missing.`, res)
        if(req.query.response_type !== "code") return throwError(4000, `"response_type" parameter value incorrect.`, res)
        if(!req.query.scopes) return throwError(4000, `"scopes" parameter missing.`, res)
        if(req.query.scopes.split(",")[0] == "") return throwError(4000, `"scopes" parameter value incorrect.`, res)

        if(!req.headers.authorization) return throwError(4000, `Authorization is required to complete this action.`, res)

        const auth = req.headers.authorization;

        if(!auth.startsWith("Bearer ")) return throwError(4000, `"authorization" header must be Bearer.`, res)

        const parsedToken = jwt.parse(auth.split("Bearer ")[1]).verify(key);

        if(!parsedToken.payload) return throwError(4000, `You need to be logged in to use this endpoint.`, res)
        if(!parsedToken.payload.id) return throwError(4000, `Unknown`, res)
        if(!parsedToken.payload.exp) return throwError(4000, `Unknown`, res)

        if(parsedToken.payload.exp <= Date.now()) return throwError(4000, `"authorization" header expired.`, res)

        const id = makeModel(db.users, "ID", idSchema);

        id.find({ id: parsedToken.payload.id }, (err, doc) => {
            const user = doc[0]

            if(!user) return throwError(3000, `Invalid credentials.`, res)
            if(user.id !== parsedToken.payload.id) return throwError(3000, `Invalid credentials.`, res)

            const application = makeModel(db.oauth, "App", appSchema);

            application.find({ "oauth.clientId": req.query.client_id }, (err, appDoc) => {
                const app = appDoc[0]
                if(!app) return throwError(4000, `Application with the "client_id" of "${req.query.client_id}" does not exist.`, res)
                if(app.oauth.clientId !== req.query.client_id) return throwError(4000, `Application with the "client_id" of "${req.query.client_id}" does not exist.`, res)
                if(!app.oauth.redirectUri.includes(req.query.redirect_uri)) return throwError(4000, `Invalid "redirect_uri" for application with id of "${req.query.client_id}".`, res)
                if(app.oauth.scopes.sort().toString() !== req.query.scopes.split(",").sort().toString()) return throwError(4000, `Invalid "scopes" for application with id of "${req.query.client_id}".`, res)

                id.find({ "authorizedApps.oauth.clientId": req.query.client_id }, (err, documents) => {
                    if(documents.length == 0) {
                        id.updateOne(
                            { _id: user._id }, 
                            { $push: { authorizedApps: JSON.parse(JSON.stringify(app)) } }
                        );
                    }
                })

                const token = jwt.generate('PBES2-HS512+A256KW', 'A256GCM', { client_id: app.oauth.clientId, id: user.id, app, expires: Date.now()+15000 }, key)

                res.json({
                    ok: true,
                    authorizedApp: req.query.client_id,
                    code: token
                })
            })

        })
    }
 }

exports.authorizeRoute = authorizeRoute;