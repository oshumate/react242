import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Privacy.css';

const Privacy = () => {
  return (
    <div>
      <Header />

      <div className="content">
        <h2>Privacy Policy</h2>
        <p>
          Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit Charliovski's website or use our services.
        </p>

        <h3>Information We Collect</h3>
        <p>
          We may collect personal information such as your name, email address, phone number, and payment information when you make a reservation, place an order, or contact us.
        </p>

        <h3>How We Use Your Information</h3>
        <p>
          We use your personal information to process reservations, orders, and customer support inquiries. We may also send you updates and promotions related to our services, but you can opt out of marketing communications at any time.
        </p>

        <h3>Data Protection</h3>
        <p>
          We take the security of your personal information seriously. We implement appropriate security measures to protect your data from unauthorized access, disclosure, or alteration.
        </p>

        <h3>Changes to This Policy</h3>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
        </p>

        <p>
          If you have any questions about our privacy practices, please{' '}
          <Link to="/contact" className="button">contact us</Link>.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
