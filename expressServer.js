let express = require('express');
let app = express();

app.get('/',function (request, response) {
    response.send('<html><body><h1>Hello world.</h1></body></html>');
});

app.post('/submit-data',function(request, response) {
    response.send('POST Request');
});

app.put('/update-data', function(request, response) {
    response.send('PUT Request');
});

app.delete('/delete-data', function(request, response) {
    response.send('DELETE Request');
});

let server = app.listen(5000, function() {
    console.log('Node server is running...');
});
