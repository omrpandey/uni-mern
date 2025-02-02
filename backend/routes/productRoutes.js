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
router.get('/:page', async (req, res) => {
  try {
    const { page } = req.params;  // Get the 'page' parameter from the URL
    const { filters } = req.query;  // Get the 'filters' from the query string

    // Parse the filters if they exist
    const filterArray = filters ? filters.split(',') : [];

    // Build the filter object based on the page and selected filters
    let filter = { page: page };

    // If filterArray has values, apply the filter to the 'type' field
    if (filterArray.length > 0) {
      filter.type = { $in: filterArray };  // Filter products that have any value in the 'type' field
    }

    // Fetch filtered products based on the filter object
    const products = await Product.find(filter);

    // If no products are found, send an appropriate message or an empty array
    if (products.length === 0) {
      return res.status(404).json({ message: 'No products found with the given filters' }); // Return empty response with 404 status
    }

    // Return the filtered products if found
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });  // Handle any server errors
  }
});




// GET single product by productId
router.get('/detail/:productId', async (req, res) => {
  const { productId } = req.params; // Extract productId from route

  // Optional: Validate productId format (if needed)
  if (!isValidProductId(productId)) {
    return res.status(400).json({ error: 'Invalid productId format' });
  }

  try {
    const product = await Product.findOne({ productId }); // Assuming productId is unique
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    console.error('Error fetching product:', err); // More specific logging
    res.status(500).json({ error: 'Server error' });
  }
});

// Helper function to validate productId (if needed)
function isValidProductId(productId) {
  // Add your validation logic (e.g., check if it's a valid UUID, numeric, etc.)
  return /^[A-Za-z0-9]+$/.test(productId); // Example for alphanumeric productId
}

router.post('/', async (req, res) => {
  const { 
      productId, 
      price, 
      discount, 
      name, 
      images, 
      priceWithCoupon, 
      size, 
      quantity, 
      description, 
      type, // The array containing all attributes (type, color, style, etc.)
      page 
  } = req.body;

  try {
      const product = new Product({
          productId,
          price,
          discount,
          name,
          images,
          priceWithCoupon,
          size,
          quantity,
          description,
          type, // This is an array containing all category attributes
          page
      });

      await product.save();
      res.status(200).json({ message: 'Product added successfully', product });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
});


module.exports = router;