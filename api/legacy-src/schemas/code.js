const { Schema } = require("mongoose");

const codeSchema = new Schema({ 
    client_id: String,
    userId: String,
    scopes: Array,
    exp: Number,
    code: String,
});


module.exports = codeSchema;