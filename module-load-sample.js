// use browser type: http://127.0.0.1:5050
// console will log 'test'
let http = require('http');
let server = http.createServer(function (request, response) {
    console.log('test');
});

server.listen(5050);
