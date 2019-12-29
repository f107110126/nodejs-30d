let emitter = require('events').EventEmitter;

// needed by extend operation
let util = require('util');

function LoopProcessor(number) {
    let me = this;
    setTimeout(function () {
        for (let i = 0; i < number; i++) {
            me.emit('BeforeProcess', i);
            console.log('Processing  number: ' + i);
            me.emit('AfterProcess', i);
        }
    }, 2000);
    return this;
}

// let LoopProcessor inherits emiter class
util.inherits(LoopProcessor, emitter);

let lp = new LoopProcessor(3);

lp.on('BeforeProcess', function (data) {
    console.log('Starting process for ' + data);
});
lp.addListener('AfterProcess', function (data) {
    console.log('After process for ' + data);
});