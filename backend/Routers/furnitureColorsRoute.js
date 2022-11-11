const express = require("express");
const { postFurnitureColor } = require("../Controllers/furnitureColorController");

const app = express();
app.use(express.json());


app.route("/").get().post(postFurnitureColor);



module.exports = app;
