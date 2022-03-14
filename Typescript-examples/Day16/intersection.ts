interface A{
    name: string;
}
interface B{
    phone: number;
}
let obj1: A&B;
obj1={name: 'Jay', phone: 225584};
document.write(`<p>Name: ${obj1.name}, Phone: ${obj1.phone} </p>`);
let obj2: A|B={name: 'Jayesh'};
document.write(`<p>Name: ${obj2.name} </p>`);