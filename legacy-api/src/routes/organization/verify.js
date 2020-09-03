const { throwError } = require("../../error")

const users = require("../../classes/users")

const verifyRoute = async (req, res) => {
    if(!req.body) return throwError(3000, `Body missing.`, res)
    if(!req.body.email) return throwError(3000, `"email" is missing.`, res)
    if(!req.body.id) return throwError(3000, `"id" is missing.`, res)

    const user = await users.getUserById(req.body.id)

    console.log(user)

    if(user && user.email) {
        if(user.email == req.body.email) {
            return res.json({
                ok: true
            })
        } else {
            return throwError(3000, `Email incorrect.`, res)
        }
    } else {
        return throwError(3000, `User not found.`, res)
    }
}

exports.verifyRoute = verifyRoute;