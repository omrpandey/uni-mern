import React, { useState } from 'react';
import './index.css'; // Ensure your styles are loaded
import fotterimg from '../../assets/images/fotterimg.jpg'; // Correct image path
import fotterimg2 from '../../assets/images/fotterimg2.jpg'; // Correct image path

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
    if (!email) {
      setMessage('Please enter a valid email.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setMessage('Subscription successful! Check your email for confirmation.');
        setEmail(''); // Clear the input field
      } else {
        setMessage(data.message || 'Something went wrong.');
      }
    } catch (error) {
      setMessage('Failed to subscribe. Please try again.');
    }
  };
  

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="company-info1">
          <img src={fotterimg} alt="Banner" className="banner-img" />
        </div>

        <div className="company-info">
          <h3>Company Information</h3>
          <ul>
            {/* Add company information links */}
          </ul>
        </div>

        <div className="signup-save">
          <h3>Sign Up and Save</h3>
          <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe}>Subscribe</button>
          <p>{message}</p>
        </div>

        <div className="connect-with-us">
          <h3>CONNECT WITH US</h3>
          <p>Email: care@unniyarcha.com</p>
          <p><b>Customer Support</b></p>
          <p>Whatsapp: +91 8527218333</p>
          <p>Calling: +91 8071188884</p>
          <p>Working Hours: Monday to Saturday (9:30 am - 5:30 pm)</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Unniyarcha Design</p>
      </div>
      <img src={fotterimg2} alt="Banner" className="banner-img" />
    </footer>
  );
};

export default Footer;
