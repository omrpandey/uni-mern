// routes/subscribeRoutes.js
const express = require('express');
const Subscriber = require('../models/Subscriber'); // Import Subscriber model
const nodemailer = require('nodemailer'); // Import Nodemailer

const router = express.Router();

// Send thank-you email after subscription
const sendSubscriptionEmail = async (email) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',  // Use Gmail or other SMTP providers
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank You for Subscribing to Unniyarcha',
      text: `Hello,\n\nThank you for subscribing to Unniyarcha. We are excited to have you on board!\n\nBest regards,\nUnniyarcha Team\nwww.unniyarcha.com`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Subscription email sent to', email);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

// POST route to handle subscription
router.post('/', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    // Check if the email already exists
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ message: 'Email is already subscribed' });
    }

    // Create a new subscriber
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    // Send the thank-you email
    await sendSubscriptionEmail(email);

    res.status(200).json({ message: 'Subscription successful! Thank you for subscribing.' });
  } catch (error) {
    console.error('Error saving subscriber:', error);
    res.status(500).json({ message: 'Failed to subscribe' });
  }
});

module.exports = router;
