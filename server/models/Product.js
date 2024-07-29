const mongoose=require("mongoose");

const ProductSchema=new mongoose.Schema({
    title:{
        type:String,
        trim:true,
    },
    rating:{
        type:String,
        
    }
})

module.exports=mongoose.model("Product",ProductSchema);