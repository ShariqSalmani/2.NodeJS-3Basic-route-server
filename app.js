const express = require('express');
const PORT = 3000;
const app = express(); 

app.get("/",(req,res)=>{
    res.send("This is homepage");
})


app.get("/about",(req,res)=>{
    res.send("This is about page");
})


app.get("/blog",(req,res)=>{
    res.send("This is blog page");
})


app.get("*",(req,res)=>{
    res.send("The page you are referring is not valid");
})



app.listen(PORT,(req,res)=>{
    console.log(`express is listening at ${PORT}`);
})
