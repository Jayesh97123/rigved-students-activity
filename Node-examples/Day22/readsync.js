let fs=require('fs');
let data=fs.readFileSync('sample.txt');
let content=data.toString();
console.log(content);