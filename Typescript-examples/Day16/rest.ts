// here x & y would be of any type
function sum1(x, ...y){
    let result = x;
    for( let i of y){
        result = result + i;
    }
    return result;
}
// here x & y must have number
function sum2(x: number, ...y: number[]): number{
    let result = x;
    for(let i of y){
        result = result + i;
    }
    return result;
}
let r = sum1(10,'20',30,'40');
document.write(`<p>Result = ${r}</p>`);
r = sum2(10,20,30,40);
document.write(`<p>Result = ${r}</p>`);
r = sum2(1,5,3,9);
document.write(`<p>Result = ${r}</p>`);