// const express = require ('express')
// const app = express();

// app.get("/ping",(req,res)=> {
//     res.send("Hello Nodemon test")
// });

// app.listen(3000, ()=> {console.log("Server started on port 3000")});

const express = require('express');
const app = express();

 const myLogger = function(req,res,next){
    console.log("LOGGED");
    next();
 }

 const reqestTime = function(req,res,next) {
    req.reqTime = Date.now()
    next()
 }

 app.use(myLogger);
 app.use(reqestTime);

 app.get('/', function(req,res){
    res.send("Home Route");
 });

 app.get('/time', function(req,res) {
    res.send(`Current Time: ${req.reqTime}`);
 })

 app.listen(3000, ()=> console.log('App Started on Port 3000'));