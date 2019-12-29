let fs = require('fs');
fs.open('test', 'r', function (error, handler) {
    if (error) console.log(error);
    let buffer = new Buffer(1024);
    fs.read(handler, buffer, 0, buffer.length, 0, function (error, bytes) {
        if (error) throw error;
        if (bytes > 0) {
            console.log(bytes + ' 字元被讀取');
            console.log(buffer.slice(0, bytes).toString());
        }

        fs.close(handler, function (error) {
            if (error) throw error;
        });
    });
});
