const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: {
        type: Number,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    category: {
        type: String,
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
    discription: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Product', productSchema);