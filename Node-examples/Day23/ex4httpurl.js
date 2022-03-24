let http=require('http');
let url=require('url');
let port_no=3002;
http.createServer((request,response)=>{
    let urlString=request.url;
    console.log(urlString);
    if(url!='/favicon.ico'){
        let urlObject=url.parse(urlString,true);
        console.log(urlObject);
        let user=urlObject.query;
        console.log(user);
        console.log(JSON.stringify(user));
        response.writeHead(200,{'content-type':'text/html'});
        response.write(`<h2>Hello ${user.name}, your age is ${user.age}</h2>`);
    }
}).listen(port_no,()=>console.log(`Server running ar ${port_no}`));