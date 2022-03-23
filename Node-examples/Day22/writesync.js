let fs=require('fs');
let msg='Hello everyone\n';
fs.writeFileSync('msg.txt',msg,{flag:'a+'});
console.log('Done...');