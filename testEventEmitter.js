// get the reference of EventEmitter class of events module
let events = require('events');
// create an object of EventEmitter class by using above reference.
let em = new events.EventEmitter();
// listen event 'FirstEvent'
em.on('FirstEvent', function (data) {
    console.log('FirstEvent: ' + data);
});
// use addListener to listen event.
em.addListener('SecondEvent', function (data) {
    console.log('SecondEvent: ' + data);
});
// emit event
em.emit('FirstEvent', 'This is the payload of FirstEvent.');
em.emit('SecondEvent', 'This is the payload of SecondEvent.');