const express = require('express')
const app = express()
const cookies = require("cookie-parser");

const PORT = process.env.PORT || 3000;
app.use(cookies())

let users = {
    name : "Narender",
    Age : 25
}
app.get("/", (req,res)=> {
    res.send("Cookies Tutorial");
})
app.get("/setuser",(req,res)=> {
    res.cookie("userData", users)
    res.send("User Data Added to cookies")
})

app.get("/getuser",(req,res)=> {
    res.send(req.cookies);
})

app.get("/logout",(req,res)=> {
    res.clearCookie('userData')
    res.send("User Logout successfully")
})
app.listen(PORT, ()=> {console.log(`Server Running at ${PORT}`)})