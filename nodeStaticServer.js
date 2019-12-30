let http = require('http');
let nodeStatic = require('node-static');
let fileServer = new nodeStatic.Server('./public');

http.createServer(function(request,response){
    fileServer.serve(request,response);
}).listen(5000, function() {
    console.log('node-static server is running on port 5000...');
});
