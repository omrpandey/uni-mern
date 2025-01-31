const express = require('express');
const Product = require('../models/product');
const router = express.Router();

// GET all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});
router.get('/:type', async (req, res) => {
  try {
    // Extract the 'type' from the URL parameter
    const { type } = req.params;

    // Get the filter parameters from the query string (e.g., color, price, finish)
    const { color, price, finish } = req.query;

    // Build the filter object
    let filter = { type: type }; // Always filter by the type passed in the URL

    if (color) filter.color = color;
    if (price) filter.price = { $lte: price }; // Example: filter by price less than or equal to the specified price
    if (finish) filter.finish = finish;

    // Find products based on the filter object
    const products = await Product.find(filter);

    // If no products are found, return a 404 response
    if (products.length === 0) {
      return res.status(404).json({ message: 'No products found with the given filters' });
    }

    // Return the filtered products
    res.json(products);
  } catch (err) {
    // Handle any server errors
    res.status(500).json({ error: 'Server error' });
  }
});



// GET single product by productId
router.get('/:productId', async (req, res) => {
    const { productId } = req.params; // Extract productId from route
    try {
      const product = await Product.findOne({ productId }); // Assuming productId is unique
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  

// POST a new product
router.post('/', async (req, res) => {
    const { productId, price, discount, Name, Image,Image1, category, priceWithCoupon, size, quantity, discription, type } = req.body;
    try {
        const product = new Product({
            productId,
            price,
            discount,
            Name,
            Image,
            Image1,
            category,
            priceWithCoupon,
            size,
            quantity,
            discription,
            type
        });
        await product.save();
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


module.exports = router;