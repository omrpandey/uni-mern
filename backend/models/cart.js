const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            name: { type: String, required: true },
            price: { type: Number, required: true },
            discount: { type: Number,required: true },
            description: { type: String, required: true },
            quantity: { type: Number, required: true },
            imageUrl: { type: String, required: true }, // Add this line to include the image URL
            rating: {type: Number, required: true},
            subTotal: {type: Number, required: true},
            countInStock: {type: String, required: true },
            userId: {type: String, required: true },
            productTitle:{type: String, required: true },
        }
    ]
},
{
  timestamps : true  
}
);

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;