const mongoose = require("mongoose");

const furnitureColorSchema = new mongoose.Schema({
    furnitureId:{type:mongoose.Schema.Types.ObjectId,ref:"furniture", required:true},
    green: { type: String },
    white: { type: String },
    grey: { type: String },
    yellow: { type: String },
    red: { type: String },
    blue: { type: String },
    floral: { type: String },
    cowhide: { type: String },
    pink: { type: String },
    black: { type: String },
    darkGrey: { type: String },
    lightGrey: { type: String },
    charcoal: { type: String },
    mint: { type: String },
    aqua: { type: String },
    coral: { type: String },
    cederGreen: { type: String },
    navy: { type: String },
    
   },
   { timestamps: true }
);

const FurnitureColor = mongoose.model("furniturecolor", furnitureColorSchema);

module.exports = FurnitureColor;
