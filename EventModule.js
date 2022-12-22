const events = require('events');

let ev = new events.EventEmitter();

//On method
ev.on('my_event', function(data){
    console.log('Event:',data);
});
ev.emit('my_event',"Call emit() method to fire my_event");


//Once method
ev.once('eventOnce',()=> console.log("EventOnes once fired"));

ev.emit('eventOnce');

//
ev.once('eventOnce',(code,msg)=> console.log(`Got ${code} and ${msg}`));
ev.emit('eventOnce',200, 'ok');

//unRegisterd Event
var c1 = (code,msg)=> console.log(`Got ${code} and ${msg}`)
ev.once('eventOnce', c1)
ev.off('eventOnce', c1)
ev.emit('eventOnce', 200, 'ok');