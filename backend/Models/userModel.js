const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: { type: String, required: true, min: 8, max: 16 },
},{timestamps:true});

const User = mongoose.model("user", userSchema);

module.exports = User;
