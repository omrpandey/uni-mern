const express = require('express');
const Reviews = require('../models/reviews');
const Product = require('../models/product');
const router = express.Router();

// GET all reviews (placeholder)
router.get('/', (req, res) => {
    res.json({ message: 'Reviews' });
});

// GET a review by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const review = await Reviews.findById(id).populate('product');
        if (!review) {
            return res.status(404).json({ error: 'Review not found' });
        }
        if (!review.product) {
            return res.status(404).json({ error: 'Product associated with this review not found' });
        }
        res.json(review);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// POST a new review or update an existing review
router.post('/', async (req, res) => {
    try {
        const { id, productId, review } = req.body;
        console.log('Request Body:', req.body); // Debug log

        // Validate the productId
        if (!productId) {
            return res.status(400).json({ error: 'Product ID is required' });
        }

        // Find the product by productId
        const product = await Product.findOne({ productId });
        console.log('Product Found:', product); // Debug log

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Check if a review already exists for this product and user
        let existingReview = await Reviews.findOne({ product: product._id, id });

        if (existingReview) {
            existingReview.review = review; // Update the review content
            console.log('Existing Review Updated:', existingReview); // Debug log

            await existingReview.save();
            res.status(200).json({ message: 'Review updated successfully', review: existingReview });
        } else {
            // Create a new review
            const newReview = new Reviews({
                id,
                product: product._id, // Store the product's ObjectId
                review
            });

            console.log('New Review Being Saved:', newReview); // Debug log

            await newReview.save();
            res.status(200).json({ message: 'Review added successfully', review: newReview });
        }
    } catch (error) {
        console.error('Error Adding Review:', error.message); // Debug log
        res.status(500).json({ error: 'Something went wrong!' });
    }
});

module.exports = router;