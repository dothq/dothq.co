var mongoose = require('mongoose');
const chalk = require("chalk")

process.env.DB_USERNAME = require("../credentials.json")['DB_USERNAME']
process.env.DB_PASSWORD = require("../credentials.json")['DB_PASSWORD']
process.env.DB_PORT = require("../credentials.json")['DB_PORT']

const databases = ['users', 'oauth', 'oauth-codes', 'shortener', 'builds', 'organization']

let db = {}

const startDatabases = () => {
    for (const dbName of databases) {
        var connection = userDbConnection = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@registry.dothq.co:${process.env.DB_PORT}/${dbName}?authSource=admin&readPreference=primary&poolSize=4`;
    
        db[dbName] = mongoose.createConnection(connection, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    
        console.log(`${chalk.bold.blue('Database')} Loaded database collection ${dbName} at registry.dothq.co`)
    };
}

exports.startDatabases = startDatabases;
exports.db = db;