const mongoose = require("mongoose");
console.log("Logged from postModel.js");
const schema = mongoose.Schema(
  {
    name: String,
    email: String,
    // Sector type is number
    sector: Number,
    isAgreed: Boolean,
  },
  { timestamps: true }
);
const Post = mongoose.model("Post", schema);
module.exports = Post;
