let emitter = require('events').EventEmitter;

function LoopProcessor(num) {
    let e = new emitter();
    setTimeout(function () {
        for (let i = 1; i <= num; i++) {
            e.emit('BeforeProcess', i);
            console.log('Processing number: ' + i);
            e.emit('AfterProcess', i);
        }
    }, 2000);
    return e;
}

let lp = LoopProcessor(3);
lp.on('BeforeProcess', function (data) {
    console.log('Starting process for ' + data);
});
lp.addListener('AfterProcess', function (data) {
    console.log('Completed processing ' + data);
});
