let express=require('express');
let cors=require('cors');
let mongoClient=require('mongodb').MongoClient;
let parser=require('body-parser');
const { response } = require('express');

let app=express();

let dbURL="mongodb://localhost:27017";

let port=3001;

app.listen(port,()=>console.log(`Server is running at port ${port}`));

app.use(parser.json());
app.use(cors());

app.get('/emps',(request,response)=>{
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client)=>{
        if(error) throw error;
        let db=client.db('nodedb');
        let cursor=db.collection('emp').find();
        let emps=[];
        cursor.forEach((doc,err)=>{
            if(err) throw err;
            emps.push(doc);
        },()=>{
            response.json(emps);
            client.close();
        });
    });
});

app.post('/emps',(request,response)=>{
    let data=request.body;
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client)=>{
        if(error) throw error;
        let db=client.db('nodedb');
        db.collection('emp').insertOne(data,(err,result)=>{
            if(err) {
                response.status(409).json({"msg":`Employee with an id ${data} exists`});
            }
            response.status(201).json(result);
            client.close();

        });
    });
});

app.get('/emps/:id',(request,response)=>{
    let id=parseInt(request.params.id);
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client)=>{
        if(error) throw error;
        let db=client.db('nodedb');
        db.collection('emp').findOne({_id:id})
        .then((result)=>{
            if(result!=null){
                response.json(result);
            } else{
                response.status(404).json({'msg':`Sorry ${id} doesn't exits`})
            }
            client.close();
        });
    });
});

app.delete('/emps/:id',(request,response)=>{
    let id=parseInt(request.params.id);
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client)=>{
        if(error) throw error;
        let db=client.db('nodedb');
        db.collection('emp').deleteOne({_id:id})
        .then((result)=>{
            response.json(result);
            client.close();
        });
    });
});
// Update city from object address
app.put('/emps/:id/:city',(request,response)=>{
    let id=parseInt(request.params.id);
    let city=request.params.city;
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client)=>{
        if(error) throw error;
        let db=client.db('nodedb');
        db.collection('emp').updateOne({_id:id},{$set:{"address.city":city}})
        .then((result)=>{
            if(result.matchedCount!=0){
                response.json(result);
            } else{
                response.json({'msg':`Selected id ${id} is not found`})
            }
            client.close();
        });
    });
});