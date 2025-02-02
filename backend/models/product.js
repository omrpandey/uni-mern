const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    priceWithCoupon: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // Single type array containing all categories (type, color, finish, style, etc.)
    type: {
        type: [String], // Array of strings
        required: true,
        enum: [
            'Anklets', 'Chains', 'Earcuff', 'Earrings', 'Necklaces', 'Rings', 'Toe Rings', 
            'Black', 'Blue', 'Gold', 'Green', 'Oxidised', 'Pink', 'Red', 'Silver', 
            'Gold', 'Oxidised', 'Silver', 
            'Contemporary', 'Traditional', 
            'GoldPlatedAnklets', 'KundanAnklets', 
            'Bali', 'Bangle/Bracelet', 'BeadedAnklets', 
            'Jewelry', 'Fashion', 'Wedding'
        ]
    },
    images: {
        type: [String], // Array to store multiple images
        required: true
    },
    page: {
        type: String, // Field for specifying which page the product belongs to
        required: true
    }
});

module.exports = mongoose.model('Product', productSchema);
