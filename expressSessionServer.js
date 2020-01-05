const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
let app = express();

let user = encodeURIComponent('nodejs');
let password = encodeURIComponent('nodejs@1234');
let authMechanism = 'DEFAULT';
let mongodbServer = '163.18.62.46:27017/nodejs';
let url = `mongodb://${user}:${password}@${mongodbServer}?authMechanism=${authMechanism}`;
let mongoOptions = { url };

app.use(session({
    secret: 'something for verify',
    store: new MongoStore(mongoOptions),
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 1000 } // for 1 minute
}));

let server = app.listen(5000, function (error) {
    if (error) console.log(error);
    else console.log('test server at port 5000 is running...');
});