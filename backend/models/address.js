const mongoose = require('mongoose')
const Schema = mongoose.Schema

const addressSchema = new Schema({
    id: {
        type : Number,
        required : true,
        unique : true
    },
    address : {
        type :String,
        required : true
    },
    userId: {
        type: Number,
        required: true,
        unique: true
    },
}, { timestamps: true })

module.exports = mongoose.model('', addressSchema)