const express = require('express')
const app = express();

const PORT = 8000;

const data = {
    Id: 7207655596,
    Name: 'Narender'
}

app.get('/',(req,res)=>{
    res.end("Welcome to my Homepage");
})

app.get('/about',(req,res)=>{
    res.json(data);
})

app.get('/weather',(req,res)=>{
    res.send("Today the weather is NICE");
})

app.listen(PORT,()=> console.log(`Server is started at ${PORT}`))