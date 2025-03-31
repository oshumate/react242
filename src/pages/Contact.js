import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Contact.css';

const Contact = () => {
  const [formMessage, setFormMessage] = useState('');
  const [messageClass, setMessageClass] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormMessage('');
    setMessageClass('');

    const formData = new FormData(event.target);
    formData.append("apikey", "1a322a45-9b97-4250-8737-86e7ac596b1a");
    formData.append("subject", "New message from Charliovski's contact form");
    formData.append("to_email", "charliovsk@gmail.com");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 'Accept': 'application/json' },
        body: formData
      });
      const result = await response.json();
      if (result.success) {
        setFormMessage("Message sent successfully!");
        setMessageClass("success");
        event.target.reset();
      } else {
        setFormMessage("An error occurred. Please try again later.");
        setMessageClass("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setFormMessage("An error occurred. Please try again later.");
      setMessageClass("error");
    }
  };

  return (
    <div>
      <Header />

      <div className="content">
        <h2>Get in Touch</h2>
        <p>
          If you have any questions or need assistance, please feel free to contact us. We’d love to hear from you!
        </p>
        <h3>Send Us a Message</h3>
        <div className="contact-form">
          <form id="contactForm" onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name:</label><br />
            <input type="text" id="name" name="name" required /><br /><br />
            <label htmlFor="email">Your Email:</label><br />
            <input type="email" id="email" name="email" required /><br /><br />
            <label htmlFor="message">Your Message:</label><br />
            <textarea id="message" name="message" rows="5" required></textarea><br /><br />
            <input type="submit" className="button" value="Send Message" />
          </form>
          <div id="form-message" className={messageClass}>{formMessage}</div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
