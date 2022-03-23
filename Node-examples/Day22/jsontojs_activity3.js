let fs=require('fs');
let data = fs.readFileSync('employee_activity.json');
let jsonString=data.toString();
let jsObject=JSON.parse(jsonString);
// console.log(jsonString);
// console.log(jsObject);
for(let i=0;i<jsObject.length;i++){
    let{name, age, salary}=jsObject[i];
    console.log(`Name: ${name}, Age: ${age}, Salary: ${salary}`)
}