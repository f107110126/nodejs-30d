let fs = require('fs');

fs.appendFile('test','something been append to test file.', function(error) {
    if(error) console.log(error);
    else console.log('Append operation complete.');
});
