const mongoose = require("mongoose");

//item Schema for particular product
const itemSchema = new mongoose.Schema({

    productId: { type: mongoose.Schema.Types.ObjectId, ref: "furniture", required: true , autopopulate: true},
    size: { type: String },
    color: { type: String },
    price: { type: Number },
    quantity: { type: Number, min: [1, "Qantity can not be less than 1"] },
    total: { type: Number }
    
}
);


const cartSchema = new mongoose.Schema({

    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user", required:true},
    item: [itemSchema],
    subTotal: { type: Number },
    
    
   },
   { timestamps: true }
);

cartSchema.plugin(require('mongoose-autopopulate'));
const Cart = mongoose.model("cart", cartSchema );

module.exports = Cart;
