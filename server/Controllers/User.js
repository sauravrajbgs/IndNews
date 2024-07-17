const express=require('express');
const User=require('../models/User');

exports.createUser=async(req ,res)=>{
    try {
        const{name ,fatherName, email, mobileNumber,currentLocation}=req.body;
        if(!name || !fatherName || !email || !mobileNumber || !currentLocation){
            return res.status(400).json({
                sucess:false,
                message:"All fields are required",
            })
            

            
        }
        const userDetail=await User.create({
            name:name,
            fatherName:fatherName,
            email:email,
            mobileNumber:mobileNumber,
            currentLocation:currentLocation,

        });
        console.log(userDetail);
        return res.status(200).json({
            sucess:true,
            message:"User created sucessfully",
            data:userDetail,
        })

    } catch (error) {
        console.log(error);
        return express.response.status(500).json({
            sucess:false,
            message:"something went wrong while creating user",
        })
    }
}