const {EventEmitter}= require('events'); //CIEK

 const birthdayEventListener=(name)=>{
    console.log(`생일 축하해요 ${name}`);
 }
 const myEmitter= new EventEmitter(); //DUO
 

const onBirthdayListener=({name})=>{
   birthdayEventListener(name);
}
myEmitter.on('birthday',onBirthdayListener); //TIGO
 myEmitter.emit('birthday',{name:'김한빈'}); //AMPEK


/* URUTAN
//CARA PERTAMA
const {EventEmitter}= require('events'); 
 const myEmitter= new EventEmitter();
 const birthdayEventListener=({name})=>{
    console.log(`생일 축하해요 ${name}`);
 }

myEmitter.on('birthday',BirthdayEventListener); 
 myEmitter.emit('birthday',{name:'김한빈'}); 
//AKHIR CARA PERTAMA


CARA KEDUA
const {EventEmitter}= require('events'); 
const myEmitter= new EventEmitter(); 
 const birthdayEventListener=(name)=>{
    console.log(`생일 축하해요 ${name}`);
 }
const onBirthdayListener=({name})=>{
   birthdayEventListener(name);
}
 myEmitter.on('birthday',onBirthdayListener);
 myEmitter.emit('birthday',{name:'김한빈'}); 
 */