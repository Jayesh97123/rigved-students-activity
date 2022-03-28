const { response } = require('express');
let express=require('express');
let app=express();
let port=3004;
app.listen(port,()=>console.log(`Server running in ${port}`));
app.post('/user/:id',(request,response)=>{
    let queryData=request.query;
    let id=request.params.id;
    let age=queryData.age;
    let name=queryData.name;
    response.send(`${id} is the path parameter and ${age}, ${name} are query parameter`);
});

app.post('/',(request,response)=>{
    response.send('Hello world');
});