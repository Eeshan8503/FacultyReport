const express=require('express');
const app=express();

app.get('/abhinav/jain',(req,res)=>{
    res.send("hello world")
})

// app.listen(3000, ()=>{console.log('app running on port 3000')});

module.exports=app;