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
    const { productId, price, discount, Name, Image, category, priceWithCoupon, size, quantity, discription } = req.body;
    try {
        const product = new Product({
            productId,
            price,
            discount,
            Name,
            Image,
            category,
            priceWithCoupon,
            size,
            quantity,
            discription
        });
        await product.save();
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


module.exports = router;