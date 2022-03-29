//Execute this query: ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234'; in MySQL Workbench
let mysql=require('mysql');
let express=require('express');
let app=express();
let con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "1234",
    database: "rigved_technology"
});
let port=3002;
let parser=require('body-parser');

app.listen(port,()=>console.log(`Server is running at port ${port}`));
con.connect((error)=>{
    if(error) throw error;
    console.log('Connected!')
});

app.use(parser.json());
app.post('/emp',(request,response)=>{
   let object=request.body;
   console.log(object);
   con.query('insert into employee values('+mysql.escape(object.id)+','+mysql.escape(object.name)+','+mysql.escape(object.salary)+');',(err,result)=>{
       if(err) throw err;
       response.json(result);
   }); 
});

app.get('/emp',(request,response)=>{  
        //console.log('Connected!');
        con.query(("select * from employee"),(err,result)=>{
            if(err) throw err;
            //result give object array
            console.log(result);
            response.json(result);
           // console.log(field);
           //It is use to fetch coloum data
           /*Object.keys(result).forEach((key)=>{
               let row=result[key];
               console.log(row.name);
               console.log(row.id)
           })*/
        })
    })

app.get('/emp/:id',(request,response)=>{
    let id=request.params.id;
    
        con.query("select * from employee where id="+mysql.escape(id),(err,result)=>{
            if (err) throw err;
            response.json(result);
        })
    
});

app.put('/emp/:id/:name',(request,response)=>{
    let id=request.params.id;
    let name=request.params.name;
    con.query('update employee set name='+mysql.escape(name)+' where id='+mysql.escape(id),(err,result)=>{
        if(err) throw err;
        response.json(result);
    });
});

app.delete('/emp/:id',(request,response)=>{
    let id=request.params.id;
    con.query('delete from employee where id='+mysql.escape(id),(err,result)=>{
        if(err) throw err;
        response.json(result);
    });
});