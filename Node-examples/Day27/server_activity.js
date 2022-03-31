
let express=require('express');
let app=express();
let http=require('http').Server(app);
let socketio=require('socket.io');
let io=socketio(http);
app.get('/',(request,response)=>{
    response.sendFile(__dirname+'/index_activity.html');
});
io.on('connection',(socket)=>{
    
    //let a=socket.request.headers['user-agent'];
    //console.log(a)
    console.log('Some client connected.');
    socket.on('chat',(msg)=>{
        var UAparser = require('ua-parser').parse;
        var useragent = UAparser(socket.request.headers['user-agent']).ua.toString().split(' ');
        
        console.log(useragent[0]);
       // console.log(msg);
       if(useragent[0]=='Firefox'){
           socket.broadcast.emit('chat', `${useragent[0]} ${msg}`);

       }else if (useragent[0]=='Chrome'){
            socket.broadcast.emit('chat', `${useragent[0]} ${msg}`);
       }
    })
});
http.listen(3002,()=>console.log('Server is running in 3002 '))