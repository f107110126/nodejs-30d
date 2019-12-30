let mysql = require('mysql');
let config = {
    host: '163.18.62.46',
    user: 'AndyLab',
    password: 'andy@1234',
    database: 'lab_db'
};
let connection = mysql.createConnection(config);
connection.connect();
let insert_sql = 'insert into students (name, standard_id) values (?,?);';
let data = [
    ['Jacky Chang', 1],
    ['Bob Ho', 1],
    ['John', 2],
    ['Mass', 2],
    ['Ram', 3]
];

data.map(function(student, index) {
    connection.query(insert_sql, student, function(error, response) {
        if (error) console.log(error);
        else console.log(response);
    });
});
