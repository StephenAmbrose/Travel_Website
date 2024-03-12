// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com"><FaFacebook /></a>
        <a href="https://www.twitter.com"><FaTwitter /></a>
        <a href="https://www.instagram.com"><FaInstagram /></a>
      </div>
      <div className="footer-content">
        <p>&copy; 2024 Travelicious. All rights reserved.</p>
        <p>Designed and developed with <span role="img" aria-label="heart">❤️</span> by Your Company</p>
      </div>
    </footer>
  );
}

export default Footer;
