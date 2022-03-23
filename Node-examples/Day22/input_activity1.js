let read=require('readline-sync');
let fs=require('fs');
let n=read.question('Enter your name: ');
let a=read.questionInt('Enter your age: ');
let s=read.questionInt('Enter your salary: ');
let employee={name:n,age:a,salary:s};
let jsonString=JSON.stringify(employee);
fs.writeFileSync('employee.json',jsonString);
console.log('Done..')