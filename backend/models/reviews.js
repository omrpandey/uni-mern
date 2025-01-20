const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    product: { 
        type: mongoose.Schema.Types.ObjectId, // **Correctly referencing the Product model using ObjectId**
        ref: 'Product', // **Ensure the reference matches the model name (Product)**
        required: true
    },
    review: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Review', reviewSchema);
