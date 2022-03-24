let http=require('http');
let PORT_NO=3002;
http.createServer(callback1).listen(PORT_NO,callback2);
function callback1(request,response){
    console.log('Callback1 execute');
    response.write('Welcome to our first web app');
    response.end();
}
function callback2(){
    console.log(`callback2 is execute, ${PORT_NO}`);
}