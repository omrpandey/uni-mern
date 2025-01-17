const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewsSchema = new Schema({
    id: {
        type : Number,
        required : true,
        unique : true
    },
    productId : {
        type :Numbers,
        required : true
    },
    review: {
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('', reviewsSchema)