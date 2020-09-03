const { getMe, getUserById, getUser } = require("../actions/users")

class Users {
    getMe = (token) => getMe(token)
    getUser = (token, id) => getUser(token, id)
    getUserById = (id) => getUserById(id)
}

module.exports = new Users();