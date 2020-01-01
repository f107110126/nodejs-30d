let MongoClient = require('mongodb').MongoClient;

// connect to the db
MongoClient.connect('mongodb://163.18.62.46:27017/nodejs', function (error, database) {
    if (error) console.log('error: ', error);
    else console.log('database connect success: ', database);
});
