const { resolve } = require("path");

function Clown(){
    return new Promise(resolve=> {
        setTimeout(()=>{
            resolve('@')
        }, 2000)
    })
}


async function msg(callback) {
    const msg = await Clown()
    console.log("Message : ",msg)
    callback()
}

msg(getResult)

function getResult() {
    console.log("Execute After");
}

//getResult()