let express = require('express');
let app = express();

app.use(express.static('public'));
// better way is real path __dirname + '/public'

// server all the request which includes /images
// in the url from images folder
app.use('/images',express.static(__dirname+'/images'));

let server = app.listen(5000, function() {
    console.log('master server is running on port 5000...');
});
