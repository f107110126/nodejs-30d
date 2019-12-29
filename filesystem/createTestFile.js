let fs = require('fs');

fs.writeFile('test', 'something stored in test file.', function (error) {
    if (error) console.log(error);
    else console.log('file has been write as specification.');
});
