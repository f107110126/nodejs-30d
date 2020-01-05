let MongoClient = require('mongodb').MongoClient;
const mongoURL = require('./mongoURL');

// connect to the db with authorize
let user = encodeURIComponent('nodejs');
let password = encodeURIComponent('nodejs@1234');
let authMechanism = 'DEFAULT';
let mongodbServer = '163.18.62.46:27017/nodejs';
let url = `mongodb://${user}:${password}@${mongodbServer}?authMechanism=${authMechanism}`;
let mongoConfig = {
    host: '163.18.62.46',
    user: 'nodejs',
    password: 'nodejs@1234',
    database: 'nodejs'
}
url = mongoURL(mongoConfig);
let client = new MongoClient(url, { useUnifiedTopology: true });

client.connect(function (error, client) {
    if (error) {
        console.log('error:', error);
        return;
    }
    // else console.log('client connect success: ', client); // used to debug
    let database = client.db('nodejs');

    database.collection('Persons', function (error, collection) {
        if (error) {
            console.log('error:', error);
            return;
        }

        collection.deleteOne(
            { id: 1 },
            function (error, response) {
                if (error) {
                    console.log('try to delete one data with error', error);
                    return;
                }
                // else console.log('response: ', response); // used for debug
            }
        );

        collection.deleteMany(
            { id: 2 },
            function (error, response) {
                if (error) {
                    console.log('try to delete many data with error.', error);
                }
                else console.log('response: ', response);
            }
        );
    });

    client.close(); // disconnect
});
