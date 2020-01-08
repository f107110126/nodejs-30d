const MongoClient = require('mongodb').MongoClient;
const mongoURL = require('./mongoURL');

const mongoOptions = {
    host: '163.18.62.46',
    user: 'nodejs',
    password: 'nodejs@1234',
    database: 'nodejs'
}

let url = mongoURL(mongoOptions);

let todoModule = {};

todoModule.client = async function () {
    let mongoClient = new MongoClient(url, { useUnifiedTopology: true });
    let client = false;
    client = await mongoClient.connect();
    return client;
}

todoModule.database = async function () {
    let client = await this.client();
    if (client === false) return false;
    return client.db(mongoOptions.database);
}

todoModule.collection = async function () {
    if (typeof this.connectedCollection === 'undefined') {
        let database = await this.database();
        if (database === false) return false;
        this.connectedCollection = await database.collection('todos', function (error, collection) {
            if (error) {
                console.log(error);
                return false;
            } else {
                // console.log(collection);
                return collection;
            }
        });
    }
    return this.connectedCollection;
};

todoModule.connect = async function () {
    return await MongoClient.connect(url, async function (error, client) {
        if (error) {
            console.log(error);
            return;
        } else {
            let database = client.db(mongoOptions.database);
            return await database.collection('todos', function (error, collection) {
                if (error) {
                    console.log(error);
                    return;
                } else {
                    // console.log(collection);
                    return collection;
                }
            });
        }
    });
};

todoModule.insert = async function (data, callback) {
    let collection = await this.collection();
    data = Array.isArray(data) ? data : [data];
    collection.insertMany(data, callback);
};

todoModule.find = async function (condition, callback) {
    let collection = await this.collection();
    collection.find(condition).toArray(callback);
};

todoModule.update = async function (condition, data, callback) {
    let collection = await this.collection();
    collection.updateMany(condition, { $set: data }, callback);
};

todoModule.delete = async function (condition, callback) {
    let collection = await this.collection();
    collection.deleteMany(condition, callback);
};

todoModule.lastId = async function () {
    let collection = await this.collection();
    let lastest = await collection.find({}, { id: 1 }).sort({ id: -1 }).limit(1).toArray();
    return lastest.length > 0 ? lastest[0].id : 0;
}

todoModule.create = async function (data, callback) {
    let current = (await this.lastId()) + 1;
    let dataset = [];
    data.map(function (item) {
        dataset.push({
            id: current++,
            message: item.message
        });
    });
    this.insert(dataset, callback);
};

todoModule.queryGet = async function (data, callback) {
    let collection = await this.collection();
    collection.find({ message: { $regex: `.*${data.message}.*` } }).toArray(callback);
};

todoModule.updateSave = async function (data, callback) {
    let collection = await this.collection();
    collection.findAndModify(
        { id: data.id }, [], { $set: { message: data.message } },
        { new: true }, callback
    );
};

todoModule.removeSave = async function (data, callback) {
    let collection = await this.collection();
    collection.remove({ id: data.id }, { w: 1 }, callback);
}

module.exports = todoModule;
