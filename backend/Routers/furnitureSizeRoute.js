const express = require("express");
const { postFurnitureSize } = require("../Controllers/furnitureSizeController");


const app = express();
app.use(express.json());


app.route("/").post(postFurnitureSize);



module.exports = app;
