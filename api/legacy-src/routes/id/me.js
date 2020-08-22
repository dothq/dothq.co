const { throwError } = require("../../error")

const users = require("../../classes/users")

const meRoute = (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if(!req.headers.authorization) return throwError(4000, `Authorization is required to complete this action.`, res)

    const auth = req.headers.authorization;

    if(!auth.startsWith("Bearer ")) return throwError(4000, `"authorization" header must be Bearer.`, res)

    users.getMe(auth.split("Bearer ")[1]).then((user, error) => {
        if(error) return throwError(4000, error, res)

        res.json(user)
    })

}

exports.meRoute = meRoute;