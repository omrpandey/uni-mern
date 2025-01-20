const express = require('express');
const Reviews = require('../models/reviews');
const Product = require('../models/product');
const router = express.Router();

// POST a new review or update an existing review
router.post('/', async (req, res) => {
    try {
        const { id, productId, review } = req.body;

        // Validate the productId
        if (!productId) {
            return res.status(400).json({ error: 'Product ID is required' });
        }

        // Find the product by productId
        const product = await Product.findOne({ productId });

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Check if a review already exists for this product and user
        let existingReview = await Reviews.findOne({ product: product._id, id });

        if (existingReview) {
            existingReview.review = review; // Update the review content
            await existingReview.save();
            res.status(200).json({ message: 'Review updated successfully', review: existingReview });
        } else {
            // Create a new review
            const newReview = new Reviews({
                id,
                product: product._id, // Store the product's ObjectId
                review
            });

            await newReview.save();
            res.status(200).json({ message: 'Review added successfully', review: newReview });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
});

module.exports = router;
