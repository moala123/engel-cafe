import React from 'react';
import { FaInstagram, FaFacebook, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="../../assets/images/logo.png" alt="Engel Cafe Logo" />
            <p>A Taste from Heaven</p>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="footer-hours">
            <h3>Opening Hours</h3>
            <p>Monday - Friday: 8:00 AM - 10:00 PM</p>
            <p>Saturday - Sunday: 9:00 AM - 11:00 PM</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Engel Cafe. All rights reserved.</p>
          <p>Made with <FaHeart className="heart-icon" /> in your city</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;