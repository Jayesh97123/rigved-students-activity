const { response } = require('express');
let express=require('express');
let app=express();
app.listen(3003,()=> console.log('Server is running in 3003'));
app.get('/',(request,response)=>{
    response.send('Hello World!');
});
app.get('/employee',(request,response)=>{
    let emp={id:100,name:'Jayesh',salary:35000};
    response.json(emp);
});
app.get('/employees',(request,response)=>{
    let empArray=[
        {id:102,name:'Jayesh',salary:25000},
        {id:103,name:'Nik',salary:26000},
        {id:104,name:'Bhau',salary:28000}
    ];
    response.json(empArray);
})