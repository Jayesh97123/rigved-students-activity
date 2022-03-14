class Student{
    constructor(public name: string, public age: number){}
    display(){
        document.write(`<p>Name: ${this.name}, Age: ${this.age} </p>`);
    }
}
let s1= new Student('Jay',30);
s1.display();