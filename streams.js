// const http = require('http');
// const fs = require('fs');

// const server = http.createServer(function(req,res){
//     fs.readFile('test.json',(err,data)=>{
//         res.end(data);
//     })
// })

// server.listen(8000,()=>{console.log('Server running on 8000')});


const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req,res){
   const stream = fs.createReadStream('test.json');
   stream.pipe(res)
})

server.listen(8000,()=>{console.log('Server running on 8000')});