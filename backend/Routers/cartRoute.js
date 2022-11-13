const express = require("express");
const { addProductsInCart } = require("../Controllers/cartControllers");


const app = express();
app.use(express.json());


app.route("/").post(addProductsInCart);



module.exports = app;
