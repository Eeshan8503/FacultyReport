const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});
const mongoose=require('mongoose');
const app=require('./app')

const uri=process.env.DATABASE_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const db=mongoose.connection;

db.once('open',()=>{
    console.log('Connected to database')
})

app.listen(process.env.PORT,()=>{console.log(`app running on port ${process.env.PORT}`)})