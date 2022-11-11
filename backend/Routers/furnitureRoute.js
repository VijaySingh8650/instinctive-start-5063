const express = require("express");
const { PostFurnitureData } = require("../Controllers/furnitureControllers");
const app = express();
app.use(express.json());


app.route("/").get().post(PostFurnitureData);



module.exports = app;
