let express = require('express');
let app = express();

// setting middleware
// assume the public directory content server resources
app.use(express.static(__dirname+'/public'));

let server = app.listen(5000, function() {
    console.log('static server is runing on port 5000...');
});
