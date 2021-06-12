const mongoose=require('mongoose');
const QuoteSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quote:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});


module.exports=Quote=mongoose.model('quote',QuoteSchema);