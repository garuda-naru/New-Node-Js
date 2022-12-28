var express = require("express")
var router = express.Router()

//Credentials
const Credential = {
    email : 'admin@gmail.com',
    password : 'admin123'
}

//login User
router.post('/login',(req,res)=> {
    if(req.body.email == Credential.email && req.body.password == Credential.password) {
        req.session.user = req.body.email;
        // res.redirect('/dashboard')
        res.end('Login Successful..!')
    } else {
        res.end('Invalid Credential Entered...!')
    }
})


module.exports = router;