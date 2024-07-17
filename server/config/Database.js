const mongoose=require("mongoose");
require("dotenv").config();
exports.connect=()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,

    })
  .then(()=>console.log("Db connected sucessfully"))
  .catch((error)=>{
    console.log("Db not connected sucessfully");
    console.error(error);
    process.exit(1);
  })
}