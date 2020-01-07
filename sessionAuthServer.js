const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');

const mongoURL = require('./modules/mongoURL');
const routerSession = require('./routes/sessionLoginAPI');
const mongoConfig = {
    host: '163.18.62.46',
    user: 'nodejs',
    password: 'nodejs@1234',
    database: 'nodejs'
};
let url = mongoURL(mongoConfig);
let app = express();

// set view engine
app.set('view engine', 'jade');
// set view directory
app.set('views', __dirname + '/myViews');

// setup session use mongodb
app.use(session({
    secret: 'something for verify',
    store: new MongoStore({ url }),
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600 * 1000 } // for 1 minute
}));

app.use('/vendor', express.static(__dirname + '/vendor'));
// trans input data to json format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/session', routerSession);

let server = app.listen(5000, function (error) {
    if (error) console.log(error);
    else console.log('login server at port 5000 is runing...');
});
