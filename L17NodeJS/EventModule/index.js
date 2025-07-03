const events = require('events');
const emitter = new events.EventEmitter();

console.log(emitter);


emitter.on('event', () => {
    console.log('Event triggered');
});

emitter.emit('event');
