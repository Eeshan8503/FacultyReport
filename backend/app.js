const express=require('express');
const app=express();
const router=require('./Routes/router');
const bodyParser=require('body-parser');
const cors=require('cors');
// app.listen(3000, ()=>{console.log('app running on port 3000')});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use('/api/v1/client/',router)
module.exports=app;