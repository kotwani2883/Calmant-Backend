const mongoose=require('mongoose');
var dotenv = require('dotenv');

dotenv.config();
var url = process.env.MONGOLAB_URI
const connectDB=async()=>{
    try{
        await mongoose.connect(
           url,
            {
                useNewUrlParser:true,
                useUnifiedTopology:true,
                useCreateIndex:true
            }
        );

        console.log("Database Connected Successfully!!");
    }
    catch(err){
        console.log(err);
    }
};
module.exports=connectDB;