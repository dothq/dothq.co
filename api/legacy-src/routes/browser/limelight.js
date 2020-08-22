const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const { resolve } = require("path");

const adapter = new FileSync(resolve(process.cwd(), "static", "limelight.json"))
const db = low(adapter)

const axios = require("axios");

db.defaults({ images: [] })
  .write()

const limelightRoute = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    let backgrounds;
    let returnValue = {
        error: "Nothing found with your filters."
    };

    backgrounds = db.get('images');

    if(req.query.category) {
        const formattedCategory = req.query.category.charAt(0).toUpperCase() + req.query.category.slice(1);

        const files = db.get('images').find({ category: formattedCategory }).value();

        if(files !== undefined) {
            returnValue = db.get('images').find({ category: formattedCategory }).value();
        }
    } else {
        returnValue = db.get('images').value();
    }

    if(req.query.random && req.query.random == "true") {
        const images = db.get('images').value();
        
        let combined = []

        images.forEach(category => {
            category.files.forEach(file => {
                file.category = category.category;
                combined.push(file)
            })
        })

        let random = combined[Math.floor(Math.random() * combined.length)];

        res.redirect(random.uri)
    }

    res.send(returnValue)
}

exports.limelightRoute = limelightRoute;