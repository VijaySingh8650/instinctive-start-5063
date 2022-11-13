const express = require("express");
const { addProductsInCart, deleteProductsInCart } = require("../Controllers/cartControllers");


const app = express();
app.use(express.json());


app.route("/").post(addProductsInCart);
app.route("/:id").delete(deleteProductsInCart);



module.exports = app;
