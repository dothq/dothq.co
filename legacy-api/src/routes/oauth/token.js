const { throwError } = require("../../error")

const { db } = require("../../mongo")

const codeSchema = require('../../schemas/code');
const makeModel = require("../../factory")

const key = require("../../../credentials.json")['TOKEN_ENC'];

const jwt = require('node-webtokens');

const tokenRoute = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    if(!req.query.client_id) return throwError(4000, `"client_id" parameter missing.`, res)
    if(!req.query.redirect_uri) return throwError(4000, `"redirect_uri" parameter missing.`, res)
    if(!req.query.response_type) return throwError(4000, `"response_type" parameter missing.`, res)
    if(req.query.response_type !== "code") return throwError(4000, `"response_type" parameter value incorrect.`, res)
    if(!req.query.scopes) return throwError(4000, `"scopes" parameter missing.`, res)
    if(req.query.scopes.split(",")[0] == "") return throwError(4000, `"scopes" parameter value incorrect.`, res)
    if(!req.body.code) return throwError(4000, `"code" missing from body.`, res)

    const codes = makeModel(db['oauth-codes'], "codes", codeSchema);

    const parsedToken = jwt.parse(req.body.code.startsWith("Refresh ") ? req.body.code.split("Refresh ")[1] : req.body.code).verify(key);

    const payload = parsedToken.payload;

    if(payload && payload['app']) {
        delete payload['app']['_id']
    }

    if(!payload) return throwError(4000, `"code" is malformed.`, res)

    if(((payload.iat*1000)+15000) <= Date.now()) return throwError(4000, `"code" expired.`, res)

    var access_token;
    var flags = {};
    var refresh_token;

    var scopes;

    if(payload.client_id !== req.query.client_id) return throwError(4000, `"client_id" parameter value incorrect.`, res)

    if(payload.refresh && payload.refresh == true) {
        if(!req.body.code.startsWith("Refresh ")) return throwError(4000, `"code" must be a authorization type of "Refresh" to refresh access_tokens.`, res)

        codes.find({ code: req.body.code.split("Refresh ")[1] }, (err, documents) => {
            if(documents.length == 0) {
                scopes = payload.scopes;
                if(JSON.stringify(req.query.scopes.split(",")) !== JSON.stringify(payload.scopes)) return throwError(4000, `"scopes" parameter incorrect.`, res)

                const refreshExpiryDate = Date.now()+31556952000;

                access_token = jwt.generate('PBES2-HS512+A256KW', 'A256GCM', { client_id: payload.client_id, id: payload.id, scopes, exp: payload.exp+10368000000 }, key)
                refresh_token = jwt.generate('PBES2-HS512+A256KW', 'A256GCM', { client_id: payload.client_id, id: payload.id, scopes, refresh: true, exp: refreshExpiryDate }, key)
                flags.refreshed = true;

                const codeRequest = new codes({
                    client_id: payload.client_id,
                    userId: payload.id,
                    scopes,
                    exp: refreshExpiryDate,
                    code: req.body.code.split("Refresh ")[1]
                })
            
                codeRequest.save().then(i => {
                    res.json({ ok: true, access_token, token_type: "Bearer", scopes, expires_in: Date.now()+10368000000, refresh_token, flags })
                })
            } else {
                return res.json({
                    ok: false,
                    error: `"refresh_token" has already been used used. When you refresh a token, make sure you grab the new "access_token" and "refresh_token" to refresh your newly-made token.`
                })
            }
        })

    } else {
        if(!payload.app || !payload.app.oauth) return throwError(4000, `"code" must not be a "access_token".`, res)
        if(JSON.stringify(req.query.scopes.split(",")) !== JSON.stringify(payload.app.oauth.scopes)) return throwError(4000, `"scopes" parameter incorrect.`, res)
        scopes = payload.app.oauth.scopes

        access_token = jwt.generate('PBES2-HS512+A256KW', 'A256GCM', { client_id: payload.client_id, id: payload.id, scopes, exp: Date.now()+10368000000 }, key)
        refresh_token = jwt.generate('PBES2-HS512+A256KW', 'A256GCM', { client_id: payload.client_id, id: payload.id, scopes, refresh: true, exp: Date.now()+31556952000 }, key)

        res.json({ ok: true, access_token, token_type: "Bearer", scopes, expires_in: Date.now()+10368000000, refresh_token, flags })
    }
}

exports.tokenRoute = tokenRoute;