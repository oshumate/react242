import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Reserve from '../components/reserve';
import './Reservations.css';

const Reservations = () => {
  return (
    <div>
      <Header />

      <div className="content">
        <h2>Reserve Your Table</h2>
        <p>
          Enjoy an unforgettable dining experience at Charliovski’s. Secure your table with an easy reservation below. We recommend booking in advance, especially for weekends and holidays.
        </p>

        <section className="policies-section">
          <h3>Reservation Policies</h3>
          <p>
            <strong>Reservation Timing:</strong> We accept reservations up to 30 days in advance. For parties larger than 8, please call us directly.
          </p>
          <p>
            <strong>Special Requests:</strong> If you have dietary restrictions or seating preferences, let us know in the form below.
          </p>
          <p>
            <strong>Late Arrivals:</strong> We hold reservations for 15 minutes past the scheduled time. Please call if you’re running late.
          </p>
        </section>

        {/* Reservation Form Component */}
        <Reserve />

        <section className="additional-section">
          <h4>Dress Code & Policies</h4>
          <p>
            We kindly request semi-formal attire for dinner service. Guests are welcome to dress smart casual during lunch hours. Large party cancellations or changes must be made at least 48 hours in advance.
          </p>
        </section>

        <section className="additional-section">
          <h4>Frequently Asked Questions</h4>
          <div className="faq-item">
            <strong>Do you allow walk-ins?</strong>
            <p>Yes, we do accept walk-ins, though availability may be limited during busy periods.</p>
          </div>
          <div className="faq-item">
            <strong>Can I bring my own wine?</strong>
            <p>Yes, we allow guests to bring up to two bottles of wine. A corkage fee applies.</p>
          </div>
          <div className="faq-item">
            <strong>Is there a kids’ menu?</strong>
            <p>Absolutely! Children are always welcome, and we have special dishes just for them.</p>
          </div>
        </section>

        <section className="testimonial-section">
          <h3>What Our Guests Are Saying</h3>
          <div className="testimonial">
            <p>"We celebrated our anniversary at Charliovski’s, and it was perfect! The staff went above and beyond." – Emily R.</p>
          </div>
          <div className="testimonial">
            <p>"Amazing service, beautiful ambiance, and the food was out of this world!" – Carlos M.</p>
          </div>
        </section>

        <section className="additional-section">
          <h4>Parking & Directions</h4>
          <p>
            Complimentary valet parking is available for dinner service. We are located two blocks from the Convention Center, easily accessible by public transport or rideshare services.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Reservations;
