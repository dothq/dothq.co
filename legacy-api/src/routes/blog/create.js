const { throwError } = require("../../error")
const { makeId } = require("../../uuid")

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const { resolve } = require("path");

const adapter = new FileSync(resolve(process.cwd(), "static", "posts.json"))
const postsDb = low(adapter)

postsDb.defaults({ posts: [], count: 0, users: [] })
  .write()
  
const { db } = require("../../mongo")

const idSchema = require('../../schemas/id');
const makeModel = require("../../factory")

const { comparePassword } = require("../../encrypt")

const createPostRoute = (req, res) => {

    if(!req.body.email) return throwError(400, `"email" string expected.`, res);
    if(!req.body.password) return throwError(400, `"password" string expected.`, res);
    if(!req.body.title) return throwError(400, `"title" string expected.`, res);
    if(!req.body.body) return throwError(400, `"body" string expected.`, res);
    if(!req.body.banner) return throwError(400, `"banner" string expected.`, res);
    if(!req.body.tag) return throwError(400, `"tag" string expected.`, res);

    if(typeof req.body.title !== "string") return throwError(400, `"title" string expected.`, res);
    if(typeof req.body.body !== "string") return throwError(400, `"body" string expected.`, res);
    if(typeof req.body.email !== "string") return throwError(400, `"email" string expected.`, res);
    if(typeof req.body.password !== "string") return throwError(400, `"password" string expected.`, res);
    if(typeof req.body.banner !== "string") return throwError(400, `"banner" string expected.`, res);
    if(typeof req.body.tag !== "string") return throwError(400, `"tag" string expected.`, res);

    if(!req.headers.authorization) return throwError(400, `"authorization" header expected.`, res);

    const id = makeModel(db.users, "ID", idSchema)

    id.find({ email: req.body.email }, (err, documents) => {

        if(documents.length !== 1) return throwError(400, `Duplicate users found.`, res);

        comparePassword(req.body.password, documents[0].password, async (err, matches) => {
            if(matches == false) return throwError(3000, `"password" does not match.`, res)

            const payload = req.body;

            delete payload.email;
            delete payload.password;

            payload.datePublished = Date.now()
            payload.postId = makeId()
            payload.author = {
                username: documents[0].username,
                avatar: documents[0].avatar
            }

            var items = req.body.title.split(" ");

            var commonWords = ['i','me','my','myself','we','our','ours','ourselves','he','him','his','himself','she','her','hers','herself','it','its','itself','they','them','their','theirs','themselves','what','which','who','whom','this','that','these','those','am','is','are','was','were','be','been','being','have','has','had','having','do','does','did','doing','a','an','the','and','but','if','or','because','as','until','while','of','at','by','for','with','about','against','between','into','through','during','before','after','above','below','from','up','down','in','out','on','off','over','under','again','further','all','any','both','each','few','more','most','other','some','such','no','nor','not','only','own','same','so','than','too','very','s','t','can','will','just','don','should','now']

            payload.slug = req.body.title
        
            const removeCommonWords = (str) => {
                resp = []
                words = str.split(' ')
                for(i=0;i<words.length;i++) {
                    if(!commonWords.includes(words[i])) {
                        resp.push(words[i])
                    }
                }
                return(resp.join(' '))
            }

            payload.slug = removeCommonWords(payload.slug);
            payload.slug = payload.slug.toLowerCase().replace(/[^a-zA-Z ]/g, "").replace(/ /g, "-")

            postsDb
                .get('posts')
                .push(payload)
                .write()

            res.json(payload)
        })
    });

};

exports.createPostRoute = createPostRoute;