let http=require('http');
let port_no=3002;
http.createServer(function(request,response){
    console.log('Request arrive');
    response.write(`This is our second app`);
    response.end();
}).listen(port_no,function(){
    console.log(`Server is running in ${port_no}`);
});