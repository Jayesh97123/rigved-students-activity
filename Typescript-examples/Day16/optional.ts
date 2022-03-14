function test1(a: number, b?: number, c?: number){
    document.write(`<p>a = ${a}, b = ${b}, c = ${c}</p>`);
}
test1(20);
test1(20,10);
test1(20,10,30);

let user:{firstname: string, lastname?:string, phone: number};
user= {firstname:'Jay', phone: 98778522 };
document.write(`<p>Name: ${user.firstname},phone: ${user.phone}</p>`);
user= {firstname:'Jay',lastname:'Sai', phone: 98778522 };
document.write(`<p>Name: ${user.firstname}, Lastname: ${user.lastname}, phone: ${user.phone}</p>`);
