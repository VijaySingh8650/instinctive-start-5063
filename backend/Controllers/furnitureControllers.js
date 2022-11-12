const Furniture = require("../Models/furnitureModel");
const FurnitureColor = require("../Models/furnitureColorModel");


// Post Furniture Data
const PostFurnitureData = async (req,res) => {
    try {
        const newFurniture = await Furniture.create({ ...req.body });
        res.status(201).send({ message: "success", furniture: newFurniture });
    }
    catch (err) {

        res.status(500).send({ error: err.message });

    }
}


// get bedroom data
const getFurnitureBedroomData = async (req, res) => {
    const {orderby, max, min } = req.query;
    let queryObj = {};
    
    
    if (min) {
        queryObj.price = { $gt: min };
    }
    if (max) {
        queryObj.price = { $lt: max };
    }
    if (max && min) {
        queryObj.price = {$gt:min, $lt:max}
    }
    let asc;
    if (orderby === "desc") {
            asc = -1;
    } else {
            asc = 1;
    }
    try {
        const bedroomData = await Furniture.find({subSet:"Bedroom Furniture", ...queryObj}).sort({price:orderby});
        res.status(200).send({ message: "success",total:bedroomData.length, bedroom: bedroomData });
    }
    catch (err) {
       res.status(500).send({ error: err.message }); 
    }
}
const getFurnitureBedroomIndividualData = async (req, res) => {
    const { id } = req.params;
    try {
        const bedroomData = await Furniture.find({ _id: id });
        const bedroomColorandSize = await FurnitureColor.find({furnitureId: id });

        res.status(200).send({ message: "success",bedroom: bedroomData, colorAndSizeLength:bedroomColorandSize.length, ColorAndSize:bedroomColorandSize});
    }
    catch (err) {
       res.status(500).send({ error: err.message }); 
    }
}



//get mattresses data
const getFurnitureMattresData = async (req, res) => {
    const {orderby, max, min } = req.query;
    let queryObj = {};
    
    
    if (min) {
        queryObj.price = { $gt: min };
    }
    if (max) {
        queryObj.price = { $lt: max };
    }
    if (max && min) {
        queryObj.price = {$gt:min, $lt:max}
    }
    let asc;
    if (orderby === "desc") {
            asc = -1;
    } else {
            asc = 1;
    }
    try {
        const mattressesData = await Furniture.find({subSet:"Mattresses", ...queryObj}).sort({price:orderby});
        res.status(200).send({ message: "success",total:mattressesData.length, mattresses: mattressesData });
    }
    catch (err) {
       res.status(500).send({ error: err.message }); 
    }
}
const getFurnitureMattresIndividualData = async (req, res) => {
    const { id } = req.params;
    try {
        const mattressesData = await Furniture.find({ _id: id });
        const mattressesColorandSize = await FurnitureColor.find({furnitureId: id });
        res.status(200).send({ message: "success", mattresses: mattressesData , colorAndSizeLength:mattressesColorandSize.length, ColorAndSize:mattressesColorandSize});
    }
    catch (err) {
       res.status(500).send({ error: err.message }); 
    }
}




//get living room data
const getFurnitureLivingData = async (req, res) => {
    const {orderby, max, min } = req.query;
    let queryObj = {};
    
    
    if (min) {
        queryObj.price = { $gt: min };
    }
    if (max) {
        queryObj.price = { $lt: max };
    }
    if (max && min) {
        queryObj.price = {$gt:min, $lt:max}
    }
    let asc;
    if (orderby === "desc") {
            asc = -1;
    } else {
            asc = 1;
    }
    
    try {
        const livingRoomData = await Furniture.find({ subSet: "Living Room Furniture", ...queryObj }).sort({ price: orderby });
        
        res.status(200).send({ message: "success",total:livingRoomData.length, livingRoom: livingRoomData});
    }
    catch (err) {
       res.status(500).send({ error: err.message }); 
    }
}
const getFurnitureLivingIndividualData = async (req, res) => {
    const { id } = req.params;
    try {
        const livingRoomData = await Furniture.find({ _id: id });
        const livingColorandSize = await FurnitureColor.find({furnitureId: id });
        res.status(200).send({ message: "success", livingRoom: livingRoomData, colorAndSizeLength:livingColorandSize.length, ColorAndSize:livingColorandSize});
    }
    catch (err) {
       res.status(500).send({ error: err.message }); 
    }
}



const searchFurniture = async (req, res) => {
    const { subset, orderby, max, min } = req.query;
    let queryObj = {};
    queryObj.subset = subset;
    if (subset) {
        queryObj.subset = { $regex: subset, $options: "i" };
    }
    if (min) {
        queryObj.price = { $gt: min };
    }
    if (max) {
        queryObj.price = { $lt: max };
    }
    if (max && min) {
        queryObj.price = {$gt:min, $lt:max}
    }
    try {
        let asc;
        if (orderby === "desc") {
            asc = -1;
        } else {
            asc = 1;
        }
        if (!subset) {

            return res.status(404).send({ message: "Nothing Found" });
        }
        const newFurniture = await Furniture.find(queryObj).sort({price:asc});
        res.send({total:newFurniture.length, data:newFurniture});
    }
    catch (err) {
        res.status(500).send({ error: err.message }); 
    }
    
}


module.exports = { PostFurnitureData,getFurnitureBedroomData,getFurnitureBedroomIndividualData , getFurnitureMattresData, getFurnitureMattresIndividualData, getFurnitureLivingData, getFurnitureLivingIndividualData, searchFurniture };
