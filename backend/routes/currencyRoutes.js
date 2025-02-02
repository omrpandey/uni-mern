const express = require('express');
const router = express.Router();
const axios = require('axios');

// Currency conversion endpoint
router.get("/exchange-rate", async (req, res) => {
  const { currency } = req.query;

  try {
    const response = await axios.get(
      `https://openexchangerates.org/api/latest.json?app_id=${process.env.EXCHANGE_API_KEY}`
    );

    const rate = response.data.rates[currency] || 1;
    res.json({ rate });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch exchange rate" });
  }
});

module.exports = router;
