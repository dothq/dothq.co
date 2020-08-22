const { postsRoute } = require("./posts")
const { createPostRoute } = require("./create")

const blog = {
    posts: postsRoute,
    create: createPostRoute
}

exports.blog = blog;