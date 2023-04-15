const {EventEmitter}= require('events'); 
 const myEmitter= new EventEmitter();
 const birthdayEventListener=(name)=>{
    console.log(`생일 축하해요 ${name}`);
 }

myEmitter.on('birthday',birthdayEventListener); 
 myEmitter.emit('birthday','김한빈'); 