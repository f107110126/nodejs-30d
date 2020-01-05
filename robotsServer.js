const express = require('express');
const bodyParser = require('body-parser');

const robotsAPI = require('./robots');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use('/', robotsAPI);

let server = app.listen(5000, function(error) {
    if(error) console.log(error);
    else console.log('robots server at port 5000 is running...');
});
