const mongoose=require("mongoose")

const ProfileSchema=new mongoose.Schema({
    dateOfBirth:{
        type:String,
    },
    gender:{
        type:String,
    },
    phoneNo:{
        type:Number,
    }
})

module.exports=mongoose.model("Profile",ProfileSchema);