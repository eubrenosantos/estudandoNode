const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on('start', e=>{
    console.log('oie')
})


eventEmitter.emit('start')