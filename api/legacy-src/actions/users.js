const { db } = require("../mongo")

const idSchema = require('../schemas/id');
const makeModel = require("../factory")

const key = require("../../credentials.json")['TOKEN_ENC'];

const jwt = require('node-webtokens');

const parseToken = (rawToken) => {
    const parsedToken = jwt.parse(rawToken).verify(key);
    
    if(!parsedToken) return { ok: false, error: `Invalid token` }
    if(parsedToken.error && parsedToken.error.message) return { ok: false, error: `Invalid token` }

    if(!parsedToken.payload.id) return { ok: false, error: `Unknown` }
    if(!parsedToken.payload.exp) return { ok: false, error: `Unknown` }

    if(parsedToken.payload.exp <= Date.now()) return { ok: false, error: `Token expired` }

    return { ok: true, payload: parsedToken.payload };
}

const getMe = (userToken) => {
    return new Promise((resolve, reject) => {
        const token = parseToken(userToken);

        if(token.ok == false) resolve({ ok: false, error: token.error })
    
        const id = makeModel(db.users, "ID", idSchema)

        id.find({ id: token.payload.id }, (err, documents) => {
            if(documents.length == 0) resolve({ ok: false, error: `User could not be found.` })
    
            const user = documents[0]
    
            resolve({
                ok: true,
                id: user.id,
                email: user.email,
                username: user.username,
                dateCreated: user.dateCreated,
                verified: user.verified,
                avatar: user.avatar ? user.avatar : null,
                authorizedApps: user.authorizedApps,
                isEmployee: user.isEmployee || null
            })
        })
    })
}

const getUser = (userToken, userId) => {
    return new Promise((resolve, reject) => {
        const token = parseToken(userToken);

        if(token.ok == false) resolve({ ok: false, error: token.error })
    
        const id = makeModel(db.users, "ID", idSchema)

        id.find({ id: userId }, (err, documents) => {
            if(documents.length == 0) resolve({ ok: false, error: `User could not be found.` })
    
            const user = documents[0]
    
            resolve({
                ok: true,
                id: user.id,
                username: user.username,
                dateCreated: user.dateCreated,
                verified: user.verified,
                avatar: user.avatar ? user.avatar : null
            })
        })
    })
}

const getUserById = (userId) => {
    return new Promise((resolve, reject) => {
        const id = makeModel(db.users, "ID", idSchema)

        id.find({ id: userId }, (err, documents) => {
            if(documents.length == 0) resolve({ ok: false, error: `User could not be found.` })
    
            const user = documents[0]
    
            resolve({
                ok: true,
                id: user.id,
                username: user.username,
                email: user.email,
                dateCreated: user.dateCreated,
                verified: user.verified,
                avatar: user.avatar ? user.avatar : null
            })
        })
    })
}

module.exports = { getMe, getUser, getUserById }