const express = require("express");
const { postFurnitureColor, getFurnitureColor } = require("../Controllers/furnitureColorController");

const app = express();
app.use(express.json());


app.route("/").post(postFurnitureColor).get(getFurnitureColor);



module.exports = app;
