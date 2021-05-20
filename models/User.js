const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now
    }
});

modules.exports=User=mongoose.model('user',UserSchema);