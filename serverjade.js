let express = require('express');
let app = express();

// set view engine
app.set('view engine', 'jade');

// set view directory
app.set('views', 'myViews');

app.get('/', function (request, response) {
    response.render('sample');
});

let server = app.listen(5000, function () {
    console.log('server jade is running on port 5000...');
});
