const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const { resolve } = require("path");

const adapter = new FileSync(resolve(process.cwd(), "static", "posts.json"))
const db = low(adapter)

db.defaults({ posts: [], count: 0 })
  .write()

const postsRoute = (req, res) => {
    res.header("Access-Control-Allow-Origin", "https://dothq.co");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    let posts;

    posts = db.get('posts');

    if(req.params.slug) {
        posts = db.get('posts').find({ slug: req.params.slug }).value()
        
        return res.json({
            post: posts
        })
    }

    res.json({
        posts
    })
};

exports.postsRoute = postsRoute;