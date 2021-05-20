const express=require('express');
const  cors = require('cors');
const app=express();
app.use(cors())
const DB=require('./database/connectDB');

app.use(express.json({extended:false}));

DB();
app.get('/',(req,res)=>{
    res.send("Welcome Herefsf!!");
})






const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is Up and Running on ${PORT}`);
})