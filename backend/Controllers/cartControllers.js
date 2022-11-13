const Cart = require("../Models/cartModel");
const Furniture = require("../Models/furnitureModel");


const addProductsInCart = async (req, res) => {
    const { userId, productId,  color, size } = req.body;
    const quantity = Number.parseInt(req.body.quantity);
    const price = Number.parseInt(req.body.price);
    try {
        const cart = await Cart.findOne({ userId });

        if (cart) {

            const index = cart.item.findIndex((product) => product.productId._id.toString() === productId); 
            
            if (index > -1) {
                //product is there in cart of user
                
                
                if (size) {
                    
                    cart.item[index].size = size;
                }
                if (color) {
                    
                    cart.item[index].color = color;
                }
                if (quantity) {
                    
                    cart.item[index].quantity = quantity;
                }
                if (price) {
                    
                    cart.item[index].price = price;
                }
                
                cart.item[index].total = quantity*price;
            } 
            else {
                //product is not there in cart of user
                const totalPrice = parseInt(quantity * price);
                
                cart.item.push({
                    productId,size,color,quantity,price, total:totalPrice
                })
            }

            cart.subTotal = cart.item.map(item => item.total).reduce((acc, next) => acc + next);
            
            let data =await cart.save();
            
            res.status(200).send({ message: "success", total: cart.item.length, cart: data});

           
        } else {
            const cartData = {
                userId,
                item: [
                    {
                        productId,size,color,quantity,price, total:parseInt(quantity*price)
                    }
                ],
                subTotal: parseInt(quantity * price)
            }
            
            const data = await Cart.create(cartData);

            res.status(200).send({ message: "success", total: data.item.length, cart: data });
        }
    }
    catch (err) {
        res.status(500).send({ error: err.message });
    }
}

const deleteProductsInCart = async (req, res) => {
    const { userId } = req.body;
    const { id } = req.params;
    try {
        const cart = await Cart.findOne({ userId });
        
        
        if (cart) {
            const index = cart.item.findIndex((product) => product.productId._id.toString() === id);
            if (index > -1) {
                
                const deleteProduct = cart.item.find((product) => product.productId._id.toString() === id);
                cart.item.splice(index, 1);
                cart.subTotal = cart.subTotal - (deleteProduct.total);
                
                let data = await cart.save();
                
                
                res.status(201).send({message:"success"});
            } else {
                res.status(400).send("Nothing Found");
            }
            
        } 
        else {
            res.status(401).send("Unauthorised");
            
        }
    }
    catch (err) {
        res.status(500).send({ error: err.message });
    }
}

module.exports = {addProductsInCart, deleteProductsInCart}