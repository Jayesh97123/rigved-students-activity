let express=require('express');
let cors=require('cors');
let mongoClient=require('mongodb').MongoClient;
let parser=require('body-parser');

let app=express();

let dbURL="mongodb://localhost:27017";

let port=3002;

app.listen(port,()=>console.log(`Server running in ${port}`));

app.use(parser.json());
app.use(cors());

app.get('/users',(request,response)=>{
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error, client)=>{
        if(error) throw error;
        let db=client.db('nodedb');
        let cursor=db.collection('user').find();
        let users=[];
        cursor.forEach((doc,err)=>{
            if(err) throw err;
            users.push(doc)
        },()=>{
            response.json(users);
            client.close();
        });
    });
});
app.post('/users',(request,response)=>{
    let userDocument=request.body;
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client)=>{
        if(error) throw error;
        let db=client.db('nodedb');
        db.collection('user').insertOne(userDocument,(err,result)=>{
            if(err) {
                response.status(409).json({"message":`User with an id ${userDocument._id} exits`})
            } else{
                response.status(201).json(result);
            }
            client.close();
        });
    });
});
app.get('/users/:id',(request,response)=>{
    let id=parseInt(request.params.id);
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client)=>{
        if(error) throw error;
        let db=client.db('nodedb');
        db.collection('user').findOne({_id:id})
        .then((result) => {
            if(result!=null){
                response.json(result);
            } else{
                response.status(404).json({"message":`Sorry ${id} doesn't exist`})
            }
            client.close();
        }).catch((err) => {
            response.json(err);
        });
    });
});
app.delete('/users/:id',(request,response)=>{
    let id=parseInt(request.params.id);
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client)=>{
        if(error) throw error;
        let db=client.db('nodedb');
        db.collection('user').deleteOne({_id:id})
        .then((result)=>{
            response.json(result);
            client.close();
        })
    });
});
app.put('/users/:id/:age',(request,response)=>{
    let id=parseInt(request.params.id);
    let ageNew=parseInt(request.params.age);
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client)=>{
        if(error) throw error;
        let db=client.db('nodedb');
        db.collection('user').updateOne({_id:id},{$set:{age:ageNew}})
        .then((result)=>{
            response.json(result);
            client.close();
        })
    })
});