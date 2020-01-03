let mysql = require('mysql');
let config = {
    host: '163.18.62.46',
    user: 'AndyLab',
    password: 'andy@1234',
    database: 'lab_db'
};
let connection = mysql.createConnection(config);

module.exports.studentList = function (callback) {
    connection.connect(function (error) {
        if (error) {
            console.log(error);
            return;
        }
        let sql = 'select * from students';
        connection.query(sql, function (error, response) {
            if (error) {
                console.log(error);
                return;
            }
            callback(response);
        });
    });
}