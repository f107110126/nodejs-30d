let fs = require('fs');

fs.writeFile('test', 'something new stored in test file.', function(error) {
    if (error) console.log(error);
    else console.log('write operation complete.');
});
