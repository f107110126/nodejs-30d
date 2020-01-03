let MongoClient = require('mongodb').MongoClient;

// connect to the db with authorize
let user = encodeURIComponent('nodejs');
let password = encodeURIComponent('nodejs@1234');
let authMechanism = 'DEFAULT';
let mongodbServer = '163.18.62.46:27017/nodejs';
let url = `mongodb://${user}:${password}@${mongodbServer}?authMechanism=${authMechanism}`;
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

        collection.findOne(
            { id: 1 },
            function (error, response) {
                if (error) {
                    console.log('try to find one data with error', error);
                    return;
                }
                else console.log('response: ', response); // used for debug
            });

        // col.find({ a: 1 }).limit(2).toArray(callback);
        collection.find({ id: 3 }).toArray(
            function (error, response) {
                if (error) {
                    console.log('try to find data with error.', error);
                }
                else console.log('response: ', response);
            }
        );

        collection.find().toArray(function (error, response) {
            if (error) console.log(error);
            else console.log('find all response: ', response);
        });
    });

    client.close(); // disconnect
});
