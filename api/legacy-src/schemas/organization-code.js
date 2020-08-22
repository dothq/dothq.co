const { Schema } = require("mongoose");

const codeSchema = new Schema({ 
    appliesTo: String,
    expires: Date,
    id: String
});


module.exports = codeSchema;