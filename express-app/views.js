const express = require('express')
const app = express();

const PORT = 8000;

app.set('view engine', 'pug')

app.get('/', function(req,res) {
    res.render('index')
}).listen(PORT,()=> {console.log('Server started on http://localhost:8000')});