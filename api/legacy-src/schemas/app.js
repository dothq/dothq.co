const { Schema } = require("mongoose");

const appSchema = new Schema({ 
    oauth: {
        redirectUri: Array,
        clientId: String,
        scopes: Array
    },
    application: {
        name: String,
        description: String,
        createDate: Number
    },
    assets: {
        icon: String,
    },
    author: {
        displayName: String,
        userId: Number
    }
});

module.exports = appSchema;