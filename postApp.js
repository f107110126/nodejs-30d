let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (request, response) {
    // sendfile('filename'); // this method's filename could be none absolute
    // sendFile('filename'); // this method's filename must be absolute.
    response.sendFile(__dirname + '/index.html'); // return file
});

app.post('/submit-student-data', function (request, response) {
    let name = request.body.firstName + '.' + request.body.lastName;
    response.send(name + ' Submitted Successfully!');
});

let server = app.listen(5000, function () {
    console.log('Node server is running...');
});
