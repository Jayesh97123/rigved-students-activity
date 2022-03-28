const { response } = require('express');
let express=require('express');
let app=express();
let port=3000;
app.listen(port,()=>console.log(`Server running at ${port}`));
app.get('/user/:userId/:username',(request,response)=>{
    console.log(request.params);
    let userId=request.params.userId;
    let username=request.params.username;
    let user={id: userId, name: username};
    response.json(user);
});
app.post('/user/:userId/:username',(request,response)=>{
    let userId=request.params.userId;
    let username=request.params.username;
    console.log(`Id = ${userId}, Name = ${username}`);
    response.send('Called post method');
});