// 1 - import node.js core module
let http = require('http');
let jade = require('jade');

let data = jade.renderFile('./myViews/sample.jade');

// 2 - creating server
let server = http.createServer(function (request, response) {
    // check the URL of the current request
    if (request.url === '/') {
        // set response header
        response.writeHead(200, { 'Content-Type': 'text/html' })
        // set response content
        response.write(data);
        response.end();
    } else response.end('Invalid Request');
});

server.listen(5000); // 3 - listen for any incoming requests
console.log('jade server test at port 5000 is running...');