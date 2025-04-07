import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <Header />

      <div className="content">
        <h2>Get in Touch</h2>
        <p>
          If you have any questions or need assistance, please feel free to contact us. We’d love to hear from you!
        </p>
        <h3>Send Us a Message</h3>
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
