function getMessage (msg, callback) {
    setTimeout(()=>{
        console.log(msg)
        callback()
    },1000)
}

function DisplayMessage() {
    console.log('Display Message')
}

getMessage('Hello Narender',()=> console.log('DisplayMsg'))