let mongoose = require('mongoose');
let dbURL="mongodb://localhost:27017/mydb";
mongoose.connect(dbURL);
let db=mongoose.connection;
db.once('open',()=>{
    //console.log('connected to mongodb');
    let doc={ _id : "Mumbai3", name : "Ajay", math : 81, english : 79 };
    let userSchema=mongoose.Schema({_id:String, name:String, math:Number, english:Number});
    let UserModel=mongoose.model('User',userSchema,'student');
    let user=new UserModel(doc);
    user.save((err,result)=>{
        if(err) throw err;
        console.log(`Stored ${result.name}`);
    })
})