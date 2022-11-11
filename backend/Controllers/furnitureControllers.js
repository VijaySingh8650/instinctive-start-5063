const Furniture = require("../Models/furnitureModel");

const PostFurnitureData = async (req,res) => {
    try {
        const newFurniture = await Furniture.create({ ...req.body });
        res.status(201).send({ message: "success", furniture: newFurniture });
    }
    catch (err) {

        res.status(500).send({ error: err.message });

    }
}

const getFurnitureData = async (req, res) => {
    try {
        const furnitureData = await Furniture.find({});
        res.status(200).send({ message: "success", data: furnitureData });
    }
    catch (err) {
       res.status(500).send({ error: err.message }); 
    }
}


module.exports = { PostFurnitureData, getFurnitureData };
