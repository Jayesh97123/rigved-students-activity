let httpModule=require('http');
let urlModule=require('url');
let port_no=3002;
httpModule.createServer((request,response)=>{
    if(request.url!='/favicon.ico'){
        console.log(`URL is ${request.url}`);
        let urlObject=urlModule.parse(request.url,true);
        let queryParameters=urlObject.query;
        response.writeHead(200,{'content-type':'text/html'});
        response.write(`<h2>Name: ${queryParameters.name}</h2>`);
        response.end();
    }
}).listen(port_no,console.log(`Server is running in port ${port_no}`));