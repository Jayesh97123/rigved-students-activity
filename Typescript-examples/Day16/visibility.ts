class Person{
    public name : string;
    protected age : number;
    constructor(name: string, age: number) {
        this.name=name;
        this.age=age;
    }
}
class Employee extends Person {
    constructor(name, age) {
        super(name,age)
    }
    printData(): void{
        document.write(`<p>Name: ${this.name}, Age: ${this.age}</p>`);
    }
}
let e = new Employee('Jay',35);
e.printData();
e.name='Jayesh';
e.printData();