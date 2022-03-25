const { response } = require('express');
let express=require('express');
let app=express();
let port=3002
app.listen(port,()=> console.log(`Express is running at ${port}`));
app.get('/',(request,response)=>{
    response.send('Requesting GET');
});
app.post('/',(request,response)=>{
    response.send('Requesting POST');
});
app.put('/',(request,response)=>{
    response.send('Requesting PUT');
});
app.delete('/',(request,response)=>{
    response.send('Requesting DELETE');
})