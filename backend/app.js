const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
const subscribeRoutes = require('./routes/subscribeRoutes');  // Import the subscribe route
const productRoutes = require('./routes/productRoutes');
const addressRoutes = require('./routes/addressRoutes');
const orderRoutes = require('./routes/orderRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const cartRoutes = require('./routes/cart'); 
const usersRoutes = require('./routes/usersRoutes');
const currencyRoutes = require('./routes/currencyRoutes');




dotenv.config();  // Load environment variables

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get('/convert', async (req, res) => {
  const exchangeApiKey = process.env.EXCHANGE_API_KEY;
  console.log("Using API Key: ", exchangeApiKey); // Check API key in this function

  // Example: Fetch conversion rate from Open Exchange Rates API
  try {
      const { from, to } = req.query; // Example: ?from=USD&to=INR
      const response = await axios.get(
          `https://openexchangerates.org/api/latest.json?app_id=${exchangeApiKey}`
      );
      const rates = response.data.rates;

      if (!rates[from] || !rates[to]) {
          return res.status(400).send("Invalid currency codes.");
      }

      const conversionRate = rates[to] / rates[from];
      res.send(`1 ${from} = ${conversionRate} ${to}`);
  } catch (error) {
      console.error("Error fetching data from API:", error);
      res.status(500).send("Error fetching conversion rates.");
  }
});



app.get('/api/products', async (req, res) => {
  const { sortOption } = req.query;
  let sortCriteria;

  switch (sortOption) {
    case 'alphabetically':
      sortCriteria = { Name: 1 };
      break;
    case 'price-low-high':
      sortCriteria = { price: 1 };
      break;
    case 'price-high-low':
      sortCriteria = { price: -1 };
      break;
    case 'rating':
      sortCriteria = { rating: -1 };
      break;
    default:
      sortCriteria = {};
  }

  try {
    const products = await Product.find().sort(sortCriteria);
    res.json(products);
  } catch (error) {
    console.status(500).json({ message: 'Error fetching products', error });
  }
});

// MongoDB connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

connectDB();

// Routes

// Middleware
app.use(express.json()); // Parse JSON bodies

// Enable CORS for all routes
app.use(cors());

// OR, if you want to allow only specific origins:
app.use(cors({
  origin: 'http://localhost:3000', // Change this to your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));


// Enable CORS for all routes
app.use(cors());

// OR, if you want to allow only specific origins:
app.use(cors({
  origin: 'http://localhost:3000', // Change this to your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));



// Root route
app.get('/', (req, res) => {
    res.send('MERN Backend is Running!');
});
// Endpoint to get exchange rate
app.get("/api/exchange-rate", async (req, res) => {
  const { currency } = req.query;

  try {
    const response = await axios.get(
      `https://openexchangerates.org/api/latest.json?app_id=${process.env.EXCHANGE_API_KEY}`
    );

    const rate = response.data.rates[currency] || 1; // Default to 1 if currency not found
    res.json({ rate });
  } catch (error) {
    console.error("Error fetching exchange rate:", error.message);
    res.status(500).json({ error: "Failed to fetch exchange rate" });
  }
});
//calling the route
app.use('/api/product',productRoutes)
app.use('/api/address',addressRoutes)
app.use('/api/orders',orderRoutes)
app.use('/api/reviews',reviewRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/cart',cartRoutes);
app.use('/subscribe', subscribeRoutes);  // Use subscribe route
app.use('/api/currency', currencyRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
