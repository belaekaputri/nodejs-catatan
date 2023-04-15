const {EventEmitter}= require('events'); //mamanggianyo

const myEventEmitter= new EventEmitter(); //jadian instant

const makeCoffe=({name})=>{  //arrowfunction buwek kopi
    console.log(`Kopi ${name} telah dibuat!`);
};

const makeBill=({price})=>{ //arrow function buwek struk
    console.log(`Bill sebesar ${price} telah dibuat!`);
}

myEventEmitter.on('coffee-order',makeCoffe); //manjalanankan dengan namo coffe-order sasuai jonio, kaduo panggil arrowfunction tadi yg dijadian ciek namo emit
myEventEmitter.on('coffee-order',makeBill);

myEventEmitter.emit('coffee-order',{name:'Tubruk',price:15000});

//jalanan di terminal node ./events/eventEmitB.js

