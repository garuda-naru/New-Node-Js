 const express = require('express');
 const path = require('path');
 const app = express();

 const port = process.env.PORT || 3000;
app.set('view engine','ejs');

//load static data
app.use('/static',express.static(path.join(__dirname,'public')))

 //home route
 app.get('/',(req,res)=> {
    res.render('base',{title:"Login System"});
 })

 app.listen(port,()=> {console.log("Server running at http://localhost:3000")})