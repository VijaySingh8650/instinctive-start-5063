const mongoose = require("mongoose");

const connectDB = ()=>{
   return mongoose.connect(process.env.DB_URL)
    .then(() => console.log("Connected to DB"))
    .catch (console.error);
}

module.exports = connectDB;