let http=require('http');
let Port_no=3001;
http.createServer((request,response)=>{
    let username='Jayesh';
    response.writeHead(200,{'content-type':'text/html'});
    response.write(`<h2>Hello App</h2>`);
    response.write(`<h3>Username: ${username}</h3>`);
    response.end();
}).listen(Port_no,()=>console.log(`Server is running in ${Port_no}`));