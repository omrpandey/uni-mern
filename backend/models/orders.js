const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ordersSchema = new Schema({
    id: {
        type : Number,
        required : true,
        unique : true
    },
    
    productName: {
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('', ordersSchema)