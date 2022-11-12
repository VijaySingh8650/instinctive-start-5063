const FurnitureSize = require("../Models/furnitureSizeModel");

const postFurnitureSize = async (req, res) => {
    
    try {
        const furnitureColorPost = await FurnitureSize.create({ ...req. body });
        res.status(201).send({ message: "success", data: furnitureColorPost});
    }
    catch (err) {
        res.status(500).send({ error: err.message }); 
    }
}

module.exports = { postFurnitureSize};
