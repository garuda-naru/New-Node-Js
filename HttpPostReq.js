const http = require('http')

const data = JSON.stringify({
    name: "Narender",
    Job: "Developer"
})

const options = {
    hostname:'reqres.in',
    path:'/api/users',
    method: 'POST',
    header: {
        'Content-Type': 'application/json'
    }
}

const req = http.request(options,(res)=> {
    let body = '';
    console.log('Status Code:',res.statusCode)


    res.on('data',(chunk)=> {
        body+= chunk;
    })

    res.on('end',()=>{
        console.log('Body:',JSON.parse(data));
    })
})

req.write(data)
req.end()