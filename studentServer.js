let express = require('express');
let app = express();

let mysql = require('mysql');

let config = {
    host: '163.18.62.46',
    user: 'AndyLab',
    password: 'andy@1234',
    database: 'lab_db'
};

let connection = mysql.createConnection(config);
connection.connect(function (error) {
    if (error) console.log(error);
    else console.log('mysql server connected.');
});

app.get('/', function (request, response) {
    let sql, result, message = '';
    sql = 'select * from students';
    if (connection.state === 'disconnected')
        message = 'mysql connect failure.';
    if (connection.state === 'authenticated')
        message = 'mysql connect successfully.';
    connection.query(sql, function (_error, _response) {
        if (_error) result = _error;
        else result = _response;
        let response_type = typeof _response;
        // response_type = 'object'
        response.write(JSON.stringify(result));
        response.end();
    });
    console.log(result);
    console.log(message);
    response.write(message);
    if (connection.state === 'disconnected') response.end();
    return;
});

let server = app.listen(5000, function (error) {
    if (error) console.log(error);
    else console.log('student server is running on port 5000...');
});
