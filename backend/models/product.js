const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    productId: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: { // fixed typo here
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
    category: { // fixed capitalization
        type: String,
        required: true
    },
    priceWithCoupon: {
        type: Number,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    quantity: { // fixed typo here as well (quantityf -> quantity)
        type: Number,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('product', productSchema)
