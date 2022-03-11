let emp : {name: string, age: number, address:{state: string , city : string}};
emp = {name:'Jay', age: 25, address:{state: 'KT', city: 'Mumbai'}};
document.write(`<p>Name : ${emp.name}, Age : ${emp.age}</p>`);