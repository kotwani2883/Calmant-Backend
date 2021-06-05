const mongoose=require('mongoose');
var dotenv = require('dotenv');

dotenv.config();

const connectDB=async()=>{
    try{
        await mongoose.connect(
           'mongodb+srv://pk22:Palak@2211@cluster0.vaeal.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
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