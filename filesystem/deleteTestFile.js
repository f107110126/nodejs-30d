let fs = require('fs');

fs.unlink('test', function(error) {
    if(error) console.log(error);
    console.log('file has been deleted.');
});
