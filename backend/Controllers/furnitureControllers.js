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


module.exports = { PostFurnitureData };
