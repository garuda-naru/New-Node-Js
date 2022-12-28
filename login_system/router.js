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
        res.redirect('/route/dashboard')
        // res.end('Login Successful..!')
    } else {
        res.end('Invalid Credential Entered...!')
    }
})

//route for Dashboard
router.get('/dashboard',(req,res)=> {
    if(req.session.user) {
        res.render('dashboard',{user : req.session.user})
    } else {
        res.send("Unauthorize User")
    }
});

//logout route
router.get('/logout',(req,res)=>{
    req.session.destroy(function(err) {
        if (err) {
            console.log(err);
            res.send("Error")
        } else {
            res.render('base',{title:"Express",logout:"Logout Successfully...!"})
        }
    })
})


module.exports = router;