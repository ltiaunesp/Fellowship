var mongojs = require('mongojs');

// database config
var mongoConnectionString = 'mongodb://localhost:27017/fellowship';
var mongoCollections = [];
var db = mongojs(mongoConnectionString, mongoCollections);

// database test and error handling
db.on('error', function (err) {
    console.log('database error', err)
})
db.on('connect', function () {
    console.log('database connected')
})

module.exports = db;
