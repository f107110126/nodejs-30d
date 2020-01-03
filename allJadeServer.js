let express = require('express');
let mysqlData = require('./mysqlListData');
let mongoData = require('./mongoListData');
let app = express();

// set view engine
app.set('view engine', 'jade');
// set view directory
app.set('views', 'myViews');

app.use('/vendor', express.static(__dirname + '/vendor'));

app.get('/person', function (request, response) {
    mongoData.personList(function (personList) {
        response.render('personPageTemplate', { personList });
    });
});

app.get('/student', function (request, response) {
    mysqlData.studentList(function (studentList) {
        response.render('studentPageTemplate', { studentList });
    });
});

app.listen(5000, function (error) {
    if (error) console.log(error);
    else console.log('all jade server at port 5000 is running...');
});
