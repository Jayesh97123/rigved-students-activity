let express=require('express');
let app=express();
let fs=require('fs');
let parser=require('body-parser');
let port=3003;
app.listen(port,()=>console.log(`Server is running at ${port}`));
app.use(parser.json());
//a.store userid, name and age through post for the url /user
app.post('/user',(request,response)=>{
    let data=fs.readFileSync('activity.json');
    let dataString=data.toString();
    //let jsArray=undefined;
    if(dataString.length<1 || dataString ==""){
        jsArray=[];
    }else {
        jsArray=JSON.parse(dataString);
    }
    let content=request.body;
    jsArray.push(content);
    let jsonObject=JSON.stringify(jsArray);
    fs.writeFileSync('activity.json',jsonObject);
    response.json('Done..')
});
//b.show all the users present in the file in the postman for the url /user
app.get('/user',(request,response)=>{
    let data=fs.readFileSync('activity.json');
    let datastring=data.toString();
    let jsObject=JSON.parse(datastring);
    //let jsonObject=JSON.stringify(jsObject);
    response.json(jsObject);
});
//c.show a particular user based on the id for the url /user/:id
app.get('/user/:id',(request,response)=>{
    let id1=request.params.id;
    let data=fs.readFileSync('activity.json');
    let datastring=data.toString();
    let jsObject=JSON.parse(datastring);
    for(let i=0;i<jsObject.length;i++){
        if(jsObject[i].userId==id1){
            let show={userId: jsObject[i].userId, name: jsObject[i].name, age: jsObject[i].age};
            response.json(show);
        }
    }
});
//d.delete a particular user based on the id for the url /user/:id
app.delete('/user/:id',(request,response)=>{
    let id1=request.params.id;
    let data=fs.readFileSync('activity.json');
    let datastring=data.toString();
    let jsObject=JSON.parse(datastring);
    for(let i=0;i<jsObject.length;i++){
        if(jsObject[i].userId==id1){
            jsObject.splice(i,1);
            let jsonObject=JSON.stringify(jsObject);
            fs.writeFileSync('activity.json',jsonObject);
            response.json(jsObject);
        }
    }
});