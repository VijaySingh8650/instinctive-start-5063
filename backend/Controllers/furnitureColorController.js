const FurnitureColor = require("../Models/furnitureColorModel");

const postFurnitureColor = async (req, res) => {
    
    try {
        const furnitureColorPost = await FurnitureColor.create({ ...req. body });
        res.status(200).send({ message: "success", data: furnitureColorPost});
    }
    catch (err) {
        res.status(500).send({ error: err.message }); 
    }
}

module.exports = { postFurnitureColor };
