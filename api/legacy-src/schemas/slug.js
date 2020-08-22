const { Schema } = require("mongoose");

const slugSchema = new Schema({ 
    id: String,
    slug: String,
    forwardTo: String,
    dateCreated: Date
});

module.exports = slugSchema;