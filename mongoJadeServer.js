let express = require('express');
let mongoData = require('./mongoListData');
let app = express();

// set view engine
app.set('view engine', 'jade');
// set view directory
app.set('views', 'myViews');

mongoData.personList(function (_personList) {
    // console.log(response);
    app.get('/', function (request, response) {
        response.render('personTemplate', { personList: _personList });
    });
});

let server = app.listen(5000, function(error) {
    if (error) console.log(error);
    else console.log('Mongo Jade Server at port 5000 is running...');
});
