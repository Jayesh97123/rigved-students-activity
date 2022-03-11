let myPromise= new Promise(function(resolve, rejected){
    let status = false;
    if(status){
        resolve('promise is fullfilled');
    } else {
        rejected('promise is rejected');
    }
});

myPromise.then(function(result){
    document.write(`<p>Callback inside then() ${result}</p>`);
}).catch(function(error){
    document.write(`<p>Callback inside catch() ${error}</p>`)
})