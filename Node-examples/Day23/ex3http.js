let http=require('http');
let port_no=3002;
http.createServer((request,response)=>{
    let username='Jayesh';
    console.log('Request arrive');
    response.writeHead(200,{'content-type':'text/html'})
    response.write(`<h2>Hello App</h2>`);
    response.write(`<h3>Username: ${username}</h3>`);
    response.end();
}).listen(port_no,()=>console.log(`Server is running in ${port_no}`));