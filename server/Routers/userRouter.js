const express=require('express');
const router=express.Router();
const {createUser}=require('../Controllers/User');
router.post("/traffic",createUser);
module.exports=router;