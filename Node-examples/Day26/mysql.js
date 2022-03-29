//Execute this query: ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234'; in MySQL Workbench
let mysql=require('mysql');
let con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "1234",
    database: "rigved_technology"
});

con.connect((err)=>{
    if(err) throw err;
    //console.log('Connected!');
    //To get data
    let name='Jay';
    con.query(("select * from emp where name="+mysql.escape(name)),(err,result,field)=>{
        if(err) throw err;
        //result give object array
        console.log(result);
       // console.log(field);
       //It is use to fetch coloum data
       /*Object.keys(result).forEach((key)=>{
           let row=result[key];
           console.log(row.name);
           console.log(row.id)
       })*/
    })
})