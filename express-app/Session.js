const express = require('express')
const app = express();
const session = require('express-session')

const PORT = process.env.PORT || 3000;

app.use(session({
    secret:'Your Secret key',
    saveUninitialized: true,
    resave: true
}))

app.get('/',(req,res)=>{
    req.session.name = 'Narender'
    return res.send('Session set')
})

app.get('/session',(req,res)=>{
    var name = req.session.name;
    return res.send(name)
})

app.get('/destroy',(req,res)=> {
    req.session.destroy(function(error) {
        console.log("Session Destroyed");
    })
    res.end();
})

app.listen(PORT,()=>{console.log(`Server running at http//:localhost:${PORT}`)});