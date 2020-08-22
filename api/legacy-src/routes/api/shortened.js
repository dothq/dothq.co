const { db } = require("../../mongo")

const slugSchema = require('../../schemas/slug');
const makeModel = require("../../factory")

const shortenedRoute = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    if(req.query.slug) {
        const slug = makeModel(db.shortener, "slugs", slugSchema)

        slug.find({ slug: req.query.slug }, (err, documents) => {
            var slugObject = documents[0];

            if(documents.length == 1) {
                res.json({ 
                    id: slugObject.toObject().id,
                    slug: slugObject.toObject().slug,
                    forwardTo: slugObject.toObject().forwardTo
                })
            } else {
                res.json({ })
            }
        })
    } else {
        res.json({
            error: "Slug must be defined",
            code: 404
        })
    }
}

exports.shortenedRoute = shortenedRoute;