//mambangkik an event

const {EventEmitter}= require('events');

const myEventEmitter= new EventEmitter();

const makeCoffe=({name})=>{
    console.log(`Kopi ${name} telah dibuat!`);
}

myEventEmitter.on('coffe-order',makeCoffe);

//membangkitkan event coffe-order
myEventEmitter.emit('coffe-order',{name:'Tubruk'});

//jalankan di terminal
//node ./events/eventEmit.js