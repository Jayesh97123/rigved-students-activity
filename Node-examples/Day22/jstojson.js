let fs=require('fs')
let employee={id:3,name:'Jayesh',salary:35000};
let jsonString=JSON.stringify(employee);
console.log(employee);
console.log(jsonString);
fs.writeFileSync('emp.json',jsonString);
console.log('Done..')