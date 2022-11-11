const mongoose = require("mongoose");

const furnitureSizeSchema = new mongoose.Schema({
    furnitureId:{type:mongoose.Schema.Types.ObjectId,ref:"furniture", required:true},
    size: { type: String, enum: ["King", "Queen", "Twin","Twin XL","Full","California King"] },
    price:{type:Number}
    
   },
   { timestamps: true }
);

const FurnitureSize = mongoose.model("furnituresize", furnitureSizeSchema);

module.exports = FurnitureSize;
