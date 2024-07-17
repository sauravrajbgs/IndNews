
const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    fatherName:{
type:String,
required:true,
    },
    email:{
type:String,
required:true,
unique:true,
    },
    mobileNumber:{
        type:String,
        required:true,
    },
    currentLocation:{
        type:String,
        required:true,
    }
})
const User=mongoose.model("User",UserSchema);
module.exports=User;