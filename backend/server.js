require("dotenv").config();
const express = require("express");
const cors = require("cors")
const connectDB = require("./ConnectDB/db")
const port = process.env.PORT || 8080;
const userRouter = require("./Routers/userRoute");


const app = express();
app.use(cors({
    origin:"http://localhost:3000",
    successStatus:200,
}))
app.use("/",userRouter);



app.listen(port,async()=>{
    await connectDB();
    console.log(`Server Running on http://localhost:${port}`)
})