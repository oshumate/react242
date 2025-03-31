import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Our Hours</h3>
          <p><strong>Monday - Friday:</strong> 10:00 AM - 10:00 PM</p>
          <p><strong>Saturday - Sunday:</strong> 11:00 AM - 11:00 PM</p>
        </div>
        <div className="footer-section">
          <h3>Our Locations</h3>
          <p><strong>Charlotte, NC:</strong> 123 Main St, Charlotte, NC 28202</p>
          <p><strong>New York, NY:</strong> 456 Broadway, New York, NY 10012</p>
          <p><strong>Austin, TX:</strong> 789 Congress Ave, Austin, TX 78701</p>
          <p><strong>Cleveland, OH:</strong> 101 Lakeside Ave, Cleveland, OH 44114</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Charliovski's | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
