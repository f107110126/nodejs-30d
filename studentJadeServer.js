let express = require('express');
let app = express();
let mysql = require('mysql');
// config for your database
let db_config = {
    host: '163.18.62.46',
    user: 'AndyLab',
    password: 'andy@1234',
    database: 'lab_db'
};

let connection = mysql.createConnection(db_config);
connection.connect(function (error) {
    if (error) console.log(error);
    else console.log('mysql server connected.');
});

// set view engine
app.set('view engine', 'jade');
// set view directory
app.set('views', 'myViews');

app.get('/', async function (request, response) {
    if (connection.state === 'disconnected') {
        response.end('database invalid.');
        return;
    }
    let sql = 'select * from students';
    connection.query(sql, function (_error, _result) {
        let result;
        if (_error) result = _error;
        else result = _result;
        response.render('studentTemplate', { studentList: result });
        console.log(result);
        return;
    });
});

let server = app.listen(5000, function (error) {
    if (error) console.log(error);
    else console.log('student jade server at port 5000 is running...');
});