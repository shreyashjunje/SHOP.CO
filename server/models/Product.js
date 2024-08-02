const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
    maxLength: 100,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    maxLength: 500,
  },
  description: {
    type: String,
    trim: true,
    maxLength: 500,
  },
  colors: [{ type: String }],
  sizes: {
    type: [String],
    // default:["Medium","L","XL"],
  },
  quantity: {
    type: Number,
    min: 1,
    // required: true,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RatingAndReviews",
    },
  ],
  images: { type: [String] },
  // image:{
  //   type:String,
  // },
  category: {
    type: String,
    required: true,
  },
  dressStyle: {
    type: String,
  },
  genders: { type: [String] },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
  discount: {
    type: Number,
    required: true,
    max: 100,
  },
  stock: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
