// 1 - loading node.js prototype module
let http = require('http');

// 2 - building server
let server = http.createServer(function (request, response) {
    // handle request and response
    switch (request.url) {
        case '/':
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write('<html><body>This is Home Page.</body></html>');
            break;
        case '/student':
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write('<html><body>This is student Page.</body></html>');
            break;
        case '/admin':
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write('<html><body>This is admin Page.</body></html>');
        case '/data':
            response.writeHead(200, {
                'Content-Type': 'application/json'
            });
            response.write(JSON.stringify({
                message: 'Hello world.'
            }));
            break;
        default:
            response.end('Invalid Request!');
            console.log('still not end the progress.');
    }
    response.end();
    // console.log('Request: ', request);
    console.log('some one is conneccted to the server.');
});

// 3 - listen port
server.listen(5000);

console.log('Node.js web server at port 5000 is running...');
