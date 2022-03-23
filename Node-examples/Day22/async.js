let x=20;
let y=30;
let z=x+y;
console.log(`z = ${z}`);
setTimeout(()=>{
    console.log('inside callback');
},3000);
// setTimeout(()=>{
//     console.log('inside callback');
// },0);
console.log('end of program');