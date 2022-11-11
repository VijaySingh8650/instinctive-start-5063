const mongoose = require("mongoose");

const connectDB = ()=>{
   return mongoose.connect(`mongodb+srv://HomeDecor:12345@cluster0.drfguky.mongodb.net/homedecor`)
    .then(() => console.log("Connected to DB"))
    .catch (console.error);
}

module.exports = connectDB;
