class Emp{
    private readonly id : number;
    private name : string;
    constructor(id : number, name: string) {
        this.id = id;
        this.name = name;
    }
    public display() : void{
        document.write(`<p>ID: ${this.id}, Name: ${this.name}</p>`);
    }
    public getID(): number{
        return this.id;
    }
    public setName(name: string): void{
        this.name = name;
    }
}
let e1 = new Emp(100,'Jay');
let e2 = new Emp(200,'Ravi');
e1.display();
e2.display();
document.write(`ID: ${e1.getID()}<br>`);
document.write(`ID: ${e2.getID()}`);