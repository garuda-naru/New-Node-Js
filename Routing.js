const http = require('http');
const hostname = 'localhost'
const port = 8000;
// function index(req,res) {
//     res.writeHead(200);
//     res.end("Node Routing Test");
// }

// function aboutUs(req,res) {
//     res.writeHead(200);
//     res.end("This is aboutUs Page");
// }


// http.createServer(function(req,res){
//     if ( req.url == '/') {
//         return index(req,res);
//     }
//     if ( req.url == '/aboutUs') {
//         return aboutUs(req,res);
//     }
// }).listen(port,hostname,()=>{
//     console.log(`Server running at http://${hostname}:${port}/`);
// });


const routes = {
    '/':function index(req,res) {
        res.writeHead(200);
        res.end('Node Routing');
    },
    '/aboutUs': function aboutUs(req,res) {
        res.end('This is About Page');
    }
}

http.createServer(function(req,res) {
    if (req.url in routes) {
        return routes[req.url](req,res);
    }
}).listen(port,hostname,()=>{
        console.log(`Server running at http://${hostname}:${port}/`);
});