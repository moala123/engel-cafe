import React from 'react';
import { FaPhone, FaWhatsapp, FaInstagram, FaFacebook, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Contact Us</h2>
          <p>Get in Touch</p>
        </div>

        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            <div className="info-item">
              <FaPhone className="icon" />
              <h3>Phone</h3>
              <p>+963983459177</p>
            </div>

            <div className="info-item">
              <FaWhatsapp className="icon" />
              <h3>WhatsApp</h3>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                Message us on WhatsApp
              </a>
            </div>

            <div className="info-item">
              <FaClock className="icon" />
              <h3>Opening Hours</h3>
              <p>Monday - Friday: 8:00 AM - 10:00 PM</p>
              <p>Saturday - Sunday: 9:00 AM - 11:00 PM</p>
            </div>

            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="map-container" data-aos="fade-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_MAPS_EMBED_URL"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Engel Cafe Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;