const FurnitureColor = require("../Models/furnitureColorModel");

const postFurnitureColor = async (req, res) => {
    console.log("Inside");
    try {
        const furnitureColorPost = await FurnitureColor.create({ ...req.body });
        console.log(furnitureColorPost);
        res.status(201).send({ message: "success", data: furnitureColorPost});
    }
    catch (err) {
        res.status(500).send({ error: err.message }); 
    }
}

const getFurnitureColor =  (req, res) => {
    res.send("Hello I am inside of the furniture color ")
}

module.exports = { postFurnitureColor, getFurnitureColor };
