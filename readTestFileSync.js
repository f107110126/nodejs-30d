let fs = require('fs');

let data = {
    nothing: fs.readFileSync('test'),
    toString: fs.readFileSync('test').toString(),
    trim: fs.readFileSync('test').toString().trim(),
    encoded: fs.readFileSync('test', 'utf8')
};

console.log(data);
