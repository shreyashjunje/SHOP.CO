const bcrypt = require('bcrypt');
const User=require("../models/User")


exports.signUp=async (req,res)=>{
    //fetch data from request body
    const {firstName,lastName,email,password,confirmPassword,otp}=req.body;

    //check data is calid or not
    if(!firstName || !lastName || !email || !password || !confirmPassword || otp){
        return res.send(204).json({
            success:false,
            message:"please, Enter all fields",
        })
    }

    //check passwrods and confirm pass are equal or not
    if(password !== confirmPassword){
        return res.status(400).json({
            success:false,
            messsage:"password don't matched ,plese try again"
        })
    }
    
    //check user is present or not 
    const existingUser=await User.findOne({email});

    if(existingUser){
        return res.status(409).json({
            success:false,
            message:"user already exists"
        })
    }

    //secure password
    let hashedPassword=await bcrypt.hash(password,10);


}