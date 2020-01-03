let MongoClient = require('mongodb').MongoClient;

let user = encodeURIComponent('nodejs');
let password = encodeURIComponent('nodejs@1234');
let authMechanism = 'DEFAULT';
let mongodbServer = '163.18.62.46:27017/nodejs';
let url = `mongodb://${user}:${password}@${mongodbServer}?authMechanism=${authMechanism}`;
let client = new MongoClient(url, { useUnifiedTopology: true });
module.exports.personList = function (callback) {
    client.connect(function (error, client) {
        if (error) {
            console.log('error: ', error);
            return;
        }
        let database = client.db('nodejs');
        database.collection('Persons', function (error, collection) {
            if (error) {
                console.log('error: ', error);
                return;
            }

            collection.find().toArray(function (error, response) {
                if (error) {
                    console.log('error: ', error);
                    return;
                }
                else callback(response);
            });
        });
    });
};