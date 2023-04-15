const {EventEmitter}= require('events'); //mamanggianyo

const myEventEmitter= new EventEmitter(); //jadian instant

const makeCoffe=(name)=>{  //arrowfunction buwek kopi
    console.log(`Kopi ${name} telah dibuat!`);
};

const makeBill=(price)=>{ //arrow function buwek struk
    console.log(`Bill sebesar ${price} telah dibuat!`);
}


//menggunakan fungsi khusus menangani event
const onCoffeeOrderedListener=({name,price})=>{
    makeCoffe(name);
    makeBill(price);
}

myEventEmitter.on('coffee-order',onCoffeeOrderedListener);  //coffee-order terserah namo yg disuko


myEventEmitter.emit('coffee-order',{name:'Tubruk',price:15000});

//jalanan di terminal node ./events/eventEmitB1.js


 

