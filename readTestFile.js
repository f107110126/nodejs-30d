let fs = require('fs');

fs.readFile('test', function(error, data) {
    if (error) throw error;
    console.log(data.toString());
});
