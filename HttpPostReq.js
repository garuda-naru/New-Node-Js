const http = require('http');
const axios = require('axios');

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

// const req = http.request(options,(res)=> {
//     let body = '';
//     console.log('Status Code:',res.statusCode)
//     res.on('data',(chunk)=> {
//         body+= chunk;
//     })
//     res.on('end',()=>{
//         console.log('Body:',JSON.parse(data));
//     })
// })

axios.post('https://reqres.in/api/users',data).then(res=> {
    console.log(`Status Code :$(res.status)`);
    console.log(`Body : ${JSON.stringify(res.data)}`);
}).catch(err => {
    console.log(err)
})
