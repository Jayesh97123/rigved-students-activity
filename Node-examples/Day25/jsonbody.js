let express=require('express');
let app=express();
let parser=require('body-parser');
const { response } = require('express');
let port=3002;
app.listen(port,()=>console.log(`Server is running at ${port}`));
app.use(parser.json());
app.post('/user',(request,response)=>{
    let content=request.body;
    console.log(content);
    response.json(content);
});
app.post('/user/:id',(request,response)=>{
    let content=request.body;
    let id=request.params.id;
    console.log(id, content);
    let user={userId: id, username: content.name, age: content.age};
    response.json(user);
});