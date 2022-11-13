require("dotenv").config();
const express = require("express");
const cors = require("cors")
const connectDB = require("./ConnectDB/db")
const port = 8080;
const userRouter = require("./Routers/userRoute");
const furnitureRouter = require("./Routers/furnitureRoute");
const furniturecolorRouter = require("./Routers/furnitureColorsRoute");
const cartRouter = require("./Routers/cartRoute");

const notFoundURL = require("./Middlewares/notFoundURL");


const app = express();
app.use(cors({
    origin: "http://localhost:3000",
    successStatus: 200,
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/",userRouter);
app.use("/api/furniture",furnitureRouter);
app.use("/api/furniture-color",furniturecolorRouter);
app.use("/api/cart",cartRouter);


app.use(notFoundURL);

app.listen(port,async()=>{
    await connectDB();
    console.log(`Server Running on http://localhost:${port}`)
})