import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <div className="header">Charliovski's</div>

      <div className={`navbar ${menuActive ? 'active' : ''}`}>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul>
          <li><a href="home.html">Home</a></li>
          <li><a href="menus.html">Menus</a></li>
          <li><a href="reservations.html">Reservations</a></li>
          <li><a href="order.html">Order Online</a></li>
        </ul>
      </div>

      <div className="content">
        <h2>Welcome to Charliovski's</h2>
        <img
          src="images/interior.jpg"
          alt="Restaurant Interior"
          className="responsive-image"
        />
        <p>
          Experience fine dining with a unique blend of flavors and ambiance. Our
          carefully crafted menu offers a delightful selection of dishes, made from
          the freshest ingredients to provide an unforgettable culinary journey.
          Visit us to indulge in elegance and taste the difference at Charliovski's.
        </p>

        <div className="text-section">
          <h3 className="centered">Featured Dishes</h3>
          <div className="dish-gallery">
            <div className="dish-item">
              <img src="images/avocado.jpg" alt="Avocado Toast" className="food-image" />
              <h4>Avocado Toast</h4>
              <p>
                Freshly mashed avocado on toasted sourdough, topped with cherry
                tomatoes and a drizzle of olive oil.
              </p>
            </div>
            <div className="dish-item">
              <img src="images/beef.jpg" alt="Beef Tenderloin" className="food-image" />
              <h4>Beef Tenderloin</h4>
              <p>
                Perfectly seared beef tenderloin, served with garlic mashed potatoes
                and a red wine reduction.
              </p>
            </div>
            <div className="dish-item">
              <img src="images/lava.jpg" alt="Chocolate Lava Cake" className="food-image" />
              <h4>Chocolate Lava Cake</h4>
              <p>
                Decadent molten chocolate cake, served with vanilla ice cream.
              </p>
            </div>
          </div>
        </div>

        <div className="text-section">
          <h3 className="centered">What Our Customers Say</h3>
          <div className="testimonials">
            <blockquote>
              "The best dining experience I've had in years. The food is always fresh
              and delicious!"
              <footer>- Sarah L.</footer>
            </blockquote>
            <blockquote>
              "Charliovski's is the perfect place for any occasion. The ambiance and
              service are top-notch."
              <footer>- Michael R.</footer>
            </blockquote>
          </div>
        </div>

        <div className="text-section">
          <h3 className="centered">Special Offers</h3>
          <p>Take advantage of our limited-time promotions!</p>
          <ul>
            <li><strong>Happy Hour</strong>: Monday - Friday, 4:00 PM - 6:00 PM</li>
            <li>
              <strong>Free Dessert</strong>: Get a free dessert with any entrée
              purchase on your birthday.
            </li>
          </ul>
        </div>

        <div className="text-section">
          <h3 className="centered">Our Gallery</h3>
          <div className="gallery">
            <img src="images/exterior1.jpg" alt="Restaurant Exterior 1" className="exterior-image" />
            <img src="images/exterior2.png" alt="Restaurant Exterior 2" className="exterior-image" />
          </div>
        </div>

        <div className="text-section iframe-section">
          <div className="iframe-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0195561641245!2d-122.40135008468195!3d37.78874597975633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d1f5e7e9%3A0xbde81d2c3b3e3d3b!2sGoogle!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus" 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="text-section centered">
          <a href="reservations.html" className="button">Make a Reservation</a>
        </div>
      </div>

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
              <li><a href="privacy.html">Privacy Policy</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Charliovski's | All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Home;
