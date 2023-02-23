const mongoose=require('mongoose')
const Schema=new mongoose.Schema({

 
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    }
   

})
const Users=mongoose.model('React',Schema);
module.exports=Users;