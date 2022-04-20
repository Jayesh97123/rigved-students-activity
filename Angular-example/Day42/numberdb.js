let express=require('express');
let cors=require('cors');
let mongoClient=require('mongodb').MongoClient;
let parser=require('body-parser');
const { response } = require('express');

let app=express();
let dbUrl="mongodb://localhost:27017";
let port=3002;

app.listen(port,()=>console.log(`Server is running at port ${port}`));

app.use(parser.json());
app.use(cors());

app.get("/numbers",(request, response)=>{
    mongoClient.connect(dbUrl,{useNewUrlParser:true},(error,client)=>{
        if(error){
            throw error
        } else{
            let db=client.db('mydb');
            let cursor=db.collection('number').find();
            let numbers= [];
            cursor.forEach((doc,err)=>{
                if(err){
                    throw err;
                } else{
                    numbers.push(doc)
                }
            },()=>{
                response.json(numbers);
                client.close();
            })
        }
    })
})

app.post("/numbers",(request, response)=>{
    let userDocument=request.body;
    mongoClient.connect(dbUrl,{useNewUrlParser:true},(error,client)=>{
        if(error){
            throw error;
        } else{
            let db=client.db('mydb');
            let N1=userDocument.n1;
            let N2=userDocument.n2;
            let add=N1+N2;
            let sub=N1-N2;
            let mult=N1*N2;
            let div=N1/N2;
            let NumberDocument={_id:userDocument._id,n1:N1,n2:N2,add:add,sub:sub,mult:mult,div:div}
            db.collection('number').insertOne(NumberDocument,(err,res)=>{
                if(err){
                    response.status(409).json({"message":`Number with an id ${NumberDocument._id} exits`})
                }else{
                    response.status(201).json(res);
                    client.close();
                }
            })
        }
    })
})

app.delete("/numbers/:id",(request,response)=>{
    let id=parseInt(request.params.id);
    mongoClient.connect(dbUrl,{useNewUrlParser:true},(error,client)=>{
        if(error){
            throw error
        } else{
            let db=client.db("mydb");
            db.collection("number").deleteOne({_id:id}).then((doc)=>{
                response.json(doc);
                client.close()
            })
        }
    })
})

app.put("/numbers/:id/:n1/:n2",(request, response)=>{
    let id=parseInt(request.params.id);
    let N1=parseInt(request.params.n1);
    let N2=parseInt(request.params.n2);
    mongoClient.connect(dbUrl,{useNewUrlParser:true},(error,client)=>{
        if(error){
            throw error
        }else{
            let db=client.db("mydb");
            let Add=N1+N2;
            let Sub=N1-N2;
            let Mult=N1*N2;
            let Div=N1/N2;
            db.collection("number").updateOne({_id:id},{$set:{n1:N1,n2:N2,add:Add,sub:Sub,mult:Mult,div:Div}}).then((doc)=>{
                response.json(doc);
                client.close();
            })
        }
    })
})

//smaple on progress
// app.put("/numbers/:id/:n1",(request, response)=>{
//     let id=parseInt(request.params.id);
//     let N1=parseInt(request.params.n1);
//     mongoClient.connect(dbUrl,{useNewUrlParser:true},(error,client)=>{
//         if(error){
//             throw error
//         }else{
//             let numbers=[]
//             let db=client.db("mydb");
//             let object=db.collection("number").findOne({_id:id});
//             object.forEach((doc,err)=>{
//                 if(err){
//                     throw err;
//                 } else{
//                     numbers.push(doc)
//                 }
//             })
//             let N2=numbers[0].n2 
//             let Add=N1+N2;
//             let Sub=N1-N2;
//             let Mult=N1*N2;
//             let Div=N1/N2;
//             db.collection("number").updateOne({_id:id},{$set:{n1:N1,n2:N2,add:Add,sub:Sub,mult:Mult,div:Div}}).then((doc)=>{
//                 response.json(doc);
//                 client.close();
//             })
//         }
//     })
// })