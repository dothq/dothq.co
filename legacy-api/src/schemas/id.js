const { Schema } = require("mongoose");

const appSchema = require("./app");

const idSchema = new Schema({ 
    id: String, 
    email: String, 
    password: String, 
    username: String, 
    dateCreated: Date,
    verified: Boolean,
    verificationCode: String,
    avatar: String,
    isEmployee: Boolean,
    authorizedApps: [appSchema]
});

module.exports = idSchema;