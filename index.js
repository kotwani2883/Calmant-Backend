const express=require('express');
const  cors = require('cors');
const app=express();
app.use(cors())
const DB=require('./database/connectDB');

app.use(express.json({extended:false}));

DB();

//Routes
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/user', require('./routes/api/users'));






const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is Up and Running on ${PORT}`);
})