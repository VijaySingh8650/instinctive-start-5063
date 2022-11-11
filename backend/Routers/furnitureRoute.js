const express = require("express");
const { PostFurnitureData, getFurnitureData } = require("../Controllers/furnitureControllers");
const app = express();
app.use(express.json());


app.route("/").get(getFurnitureData).post(PostFurnitureData);



module.exports = app;
