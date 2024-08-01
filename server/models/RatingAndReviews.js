const mongoose = require("mongoose");


const RatingAndReviewsSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
    max: 5,
    min: 0,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
    maxlength: 100,
  },
  postedOn: {
    type: Date,
    default: Date.now,
  },
  Product:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product",
    required:true,
    index:true,
  }
});

module.exports = mongoose.model("RatingAndReviews", RatingAndReviewsSchema);
