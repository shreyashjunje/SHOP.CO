const mongoose=require("mongoose");


const UserSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        maxlength:20,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        maxlength:20,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    password:{
        type:String,
        required:true,

    },
    
    token:{
        type:String,
    },
    image:{
        type:String,
        default:"",

    },
    cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        
    }],
    resetPasswordExpires: {
        type: Date,
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile",
        required:true,

    }
})

module.exports=mongoose.model("User",UserSchema);