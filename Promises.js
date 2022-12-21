const { result } = require("lodash");

let promise = new Promise(function(resolve,reject){
    setTimeout(()=> resolve('Im From Resolve'), 1000)
});

promise.then(
    result => {
        console.log(result)
    },
    error=>console.log(error)
)

function GetAter(){
    console.log("Print After");
}

GetAter()