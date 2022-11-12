require("dotenv").config();
const express = require("express");
const cors = require("cors")
const connectDB = require("./ConnectDB/db")
const port = process.env.PORT || 8080;
const userRouter = require("./Routers/userRoute");
const furnitureRouter = require("./Routers/furnitureRoute");
const furniturecolorRouter = require("./Routers/furnitureColorsRoute");
const furnituresizeRouter = require("./Routers/furnitureSizeRoute");


const app = express();
app.use(cors({
    origin: "http://localhost:3000",
    successStatus: 200,
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/",userRouter);
app.use("/furniture",furnitureRouter);
app.use("/furniture-color",furniturecolorRouter);
app.use("/furniture-size",furnituresizeRouter);



app.listen(port,async()=>{
    await connectDB();
    console.log(`Server Running on http://localhost:${port}`)
})