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

        collection.insertOne({
            id: 1,
            firstName: 'Steve',
            lastName: 'Jobs'
        }, function (error, response) {
            if (error) {
                console.log('try to insert data with error', error);
                return;
            }
            // else console.log('response: ', response);
        });

        collection.insertMany([
            { id: 2, firstName: 'Bill', lastName: 'Gates' },
            { id: 3, firstName: 'James', lastName: 'Bond' }
        ], function (error, response) {
            if (error) {
                console.log('try to insert many with error.', error);
                return;
            }
            // else console.log('response', response);
        });

        collection.countDocuments(function (error, count) {
            if (error) console.log('try to get count with error.', error);
            else console.log('Total Rows: ' + count);
        })
    });

    client.close(); // disconnect
});
