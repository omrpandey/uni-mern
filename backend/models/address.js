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
        type: mongoose.Schema.Types.ObjectId,  // Referencing User model by ObjectId
        required: true,
        ref: 'users'  // Reference to the User model
    },
}, { timestamps: true })

module.exports = mongoose.model('address', addressSchema)