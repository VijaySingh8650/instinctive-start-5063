const mongoose = require("mongoose");

const furnitureSchema = new mongoose.Schema({
    set: { type: String, default: "Furniture" , required:[true, "set name is required"]},
    subSet: { type: String, default: "Living Room Furniture", required: [true, "subSet name is required"] },
    image:{type:Array},
    heading: { type: String, required:[true, "heading is required"] },
    price: { type: Number , required:[true, "Price is required"]},
    originalPrice: { type: Number, required:[true, "originalPrice is required"] },
    details: { type: String, required:[true, "details is required"] },
    features:{type:Array}
   },
   { timestamps: true }
);

const Furniture = mongoose.model("furniture", furnitureSchema);

module.exports = Furniture;
