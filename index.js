// loading third-part modules
let express = require('express');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

// loading routing file
let routerCookie = require('./routes/loginAPI');
let app = express();

// set view engine
app.set('view engine', 'jade');
// set view directory
app.set('views', __dirname + '/myViews');


app.use('/vendor', express.static(__dirname + '/vendor'));
// trans input data to json format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// sign for cookie
app.use(cookieParser('01234567'));

// create a router to handle routes for a set of loginAPI

// static file like .js, .json, .xml, html....
app.use('/cookie', routerCookie);

let server = app.listen(5000, function (error) {
    if (error) console.log(error);
    else console.log('login server at port 5000 is running...');
});
