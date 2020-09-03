const { Schema } = require("mongoose");

const buildSchema = new Schema({ 
    id: String,
    downloadUrl: String,
    version: String,
    productName: String,
    unlocksAt: Date,
    supportedOs: Array,
    dateUploaded: Date
});

module.exports = buildSchema;