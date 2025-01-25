const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    productId: { 
        type: mongoose.Schema.Types.ObjectId, // Correct type for referencing
        ref: 'Product',
        required: true
    },
    
    review: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Review', reviewSchema);
