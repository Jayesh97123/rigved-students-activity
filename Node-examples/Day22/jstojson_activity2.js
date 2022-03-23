let read=require('readline-sync');
let fs=require('fs');
let n=read.question('Enter your name: ');
let a=read.questionInt('Enter your age: ');
let s=read.questionInt('Enter your salary: ');
let employee={name:n,age:a,salary:s};
let jsonString=JSON.stringify(employee);
let data=fs.readFileSync('employee_activity.json').toString();
if(data.endsWith('}]')==true){
    let s1=data.slice(1,(data.length-1))
    let s2=data.slice(0,(data.length-1))
    let out=`${s2},\n${jsonString}]`
    // console.log(employee);
    // console.log(jsonString);
    fs.writeFileSync('employee_activity.json',out);
    console.log('Done...')

}else{
    let out=`[${jsonString}]`
    // console.log(employee);
    // console.log(jsonString);
    fs.writeFileSync('employee_activity.json',out);
    console.log('Done...')
}