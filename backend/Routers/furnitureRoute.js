const express = require("express");
const { PostFurnitureData, getFurnitureBedroomData, getFurnitureMattresData, getFurnitureLivingData, getFurnitureBedroomIndividualData, getFurnitureMattresIndividualData, getFurnitureLivingIndividualData, searchFurniture, getTotalProductsAdminSide} = require("../Controllers/furnitureControllers");
const app = express();
app.use(express.json());


// Post Furniture Data
//search furniture data
app.route("/").get(searchFurniture).post(PostFurnitureData);

// Bedroom Data
app.route("/bedroom").get(getFurnitureBedroomData);
app.route("/bedroom/:id").get(getFurnitureBedroomIndividualData);

// Mattresses Data
app.route("/mattresses").get(getFurnitureMattresData);
app.route("/mattresses/:id").get(getFurnitureMattresIndividualData);

// Living Room Data
app.route("/living").get(getFurnitureLivingData);
app.route("/living/:id").get(getFurnitureLivingIndividualData);



//for admin use only
app.route("/products").get(getTotalProductsAdminSide);

module.exports = app;
