let read=require('readline-sync');
let name=read.question('Enter your name: ');
let age=read.questionInt('Enter your age: ');
console.log(`Hello ${name}, your age is ${age}`);
let num1=read.questionInt('Enter a number: ');
let num2=read.questionInt('Enter another number: ');
let result=num1+num2;
console.log(`Result: ${result}`);