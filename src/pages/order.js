import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrderForm from '../components/OrderForm';
import './order.css';

const Order = () => {
  return (
    <div>
      <Header />

      <div className="content">
        <h2>Order Online</h2>
        <p>
          Welcome to our online ordering platform! Explore our new features,
          special offers, and more below. With just a few clicks, you can
          enjoy your favorite Charliovski’s dishes at home.
        </p>

        <div className="additional-section">
          <h4>Featured Items</h4>
          <p>
            Try some of our best-selling dishes before checking out our full menu
            options below!
          </p>
          <div className="dish-grid">
            <div className="dish-card">
              <h5>Omelette Deluxe</h5>
              <p>
                Fluffy eggs loaded with cheese, veggies, and your choice of protein.
              </p>
            </div>
            <div className="dish-card">
              <h5>Margherita Pizza</h5>
              <p>
                Classic tomato sauce, mozzarella, and basil on a hand-tossed crust.
              </p>
            </div>
            <div className="dish-card">
              <h5>Grilled Ribeye Steak</h5>
              <p>
                Juicy steak grilled to perfection, served with our signature sauce.
              </p>
            </div>
            <div className="dish-card">
              <h5>Chocolate Lava Cake</h5>
              <p>
                Rich chocolate cake with a molten center, served warm with ice cream.
              </p>
            </div>
          </div>
        </div>

        <div className="additional-section">
          <h4>Ordering & Delivery FAQ</h4>
          <p>
            <strong>Delivery Range:</strong> We deliver within a 5-mile radius of each
            Charliovski’s location.
          </p>
          <p>
            <strong>Pickup Orders:</strong> You can also opt for curbside pickup at no
            extra charge.
          </p>
          <p>
            <strong>Payment Options:</strong> We accept major credit cards and digital
            wallets. Cash is accepted for in-store pickups.
          </p>
          <p>
            <strong>Need Catering?</strong> For large or corporate orders, please{' '}
            <Link to="/contact">contact us</Link> for a custom quote.
          </p>
        </div>

        <OrderForm />
      </div>

      <Footer />
    </div>
  );
};

export default Order;
