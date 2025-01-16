import React from 'react';
import './index.css'; // Make sure to style this properly
import fotterimg from '../../assets/images/fotterimg.jpg'; // Replace with your image path
import fotterimg2 from '../../assets/images/fotterimg2.jpg'; // Replace with your image path
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* First Row: Logo and Company Information */}
       <div className='company-info1'>
           <img src={fotterimg} alt="Banner" className="banner-img" />
           </div>
           <div className="company-info">
          <h3>Company Information</h3>
          <ul>
            <li><a href="/about-us">ABOUT US</a></li>
            <li><a href="/return-exchange-policy">RETURN & EXCHANGE POLICY</a></li>
            <li><a href="/buyback-policy">BUYBACK POLICY</a></li>
            <li><a href="/franchise-enquiry">FRANCHISE ENQUIRY</a></li>
            <li><a href="/corporate-gifting">CORPORATE GIFTING</a></li>
            <li><a href="/privacy-policy">PRIVACY POLICY</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/terms-of-service">TERMS OF SERVICE</a></li>
            <li><a href="/contact-us">CONTACT US</a></li>
            <li><a href="/blogs">BLOGS</a></li>
            <li><a href="/sitemap">SITEMAP</a></li>
          </ul>
        </div>

        {/* Second Row: Sign Up and Save */}
        <div className="signup-save">
          <h3>Sign Up and Save</h3>
          <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>

        {/* Third Row: Connect with Us */}
        <div className="connect-with-us">
          <h3>CONNECT WITH US</h3>
          <p>Email: care@unniyarcha.com</p>
          <p>Customer Support</p>
          <p>Whatsapp: +91 8527218333</p>
          <p>Calling: +91 8071188884</p>
          <p>Working Hours: Monday to Saturday (9:30 am - 5:30 pm)</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 Unniyarcha Design</p>
      </div>
      <img src={fotterimg2} alt="Banner" className="banner-img" />
    </footer>
  );
};

export default Footer;
