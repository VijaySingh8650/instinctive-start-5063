const express = require("express");

const { PostFurnitureData, getFurnitureBedroomData, getFurnitureMattresData, getFurnitureLivingData, getFurnitureBedroomIndividualData, getFurnitureMattresIndividualData, getFurnitureLivingIndividualData, searchFurniture, getFurnitureDiningData, getFurnitureDiningIndividualData, getFurnitureKidsRoomData, getFurnitureKitchenData, getFurnitureKitchenIndividualData, getFurnitureRecreationData, getFurnitureRecreationIndividualData, getFurnitureKidsRoomIndividualData, getTotalProductsAdminSide} = require("../Controllers/furnitureControllers");

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

//Dining Room Data
app.route("/dining").get(getFurnitureDiningData);
app.route("/dining/:id").get(getFurnitureDiningIndividualData);

//Kitchen Room Data
app.route("/kitchen").get(getFurnitureKitchenData);
app.route("/kitchen/:id").get(getFurnitureKitchenIndividualData);

//recreation Room Data
app.route("/recreation").get(getFurnitureRecreationData);
app.route("/recreation/:id").get(getFurnitureRecreationIndividualData);

//kids Room Data
app.route("/kids").get(getFurnitureKidsRoomData);
app.route("/kids/:id").get(getFurnitureKidsRoomIndividualData);









//for admin use only
app.route("/products").get(getTotalProductsAdminSide);

module.exports = app;
