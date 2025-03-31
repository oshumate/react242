import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

// Import images from the local images folder inside the pages folder
import interiorImg from './images/interior.jpg';
import avocadoImg from './images/avocado.jpg';
import beefImg from './images/beef.jpg';
import lavaImg from './images/lava.jpg';
import exterior1Img from './images/exterior1.jpg';
import exterior2Img from './images/exterior2.png';

const Home = () => {
  return (
    <div>
      <Header />

      <div className="content">
        <h2>Welcome to Charliovski's</h2>
        <img 
          src={interiorImg} 
          alt="Restaurant Interior" 
          className="responsive-image" 
        />
        <p>
          Experience fine dining with a unique blend of flavors and ambiance. Our carefully crafted menu offers a delightful selection of dishes, made from the freshest ingredients to provide an unforgettable culinary journey. Visit us to indulge in elegance and taste the difference at Charliovski's.
        </p>

        <div className="text-section">
          <h3 className="centered">Featured Dishes</h3>
          <div className="dish-gallery">
            <div className="dish-item">
              <img 
                src={avocadoImg} 
                alt="Avocado Toast" 
                className="food-image" 
              />
              <h4>Avocado Toast</h4>
              <p>
                Freshly mashed avocado on toasted sourdough, topped with cherry tomatoes and a drizzle of olive oil.
              </p>
            </div>
            <div className="dish-item">
              <img 
                src={beefImg} 
                alt="Beef Tenderloin" 
                className="food-image" 
              />
              <h4>Beef Tenderloin</h4>
              <p>
                Perfectly seared beef tenderloin, served with garlic mashed potatoes and a red wine reduction.
              </p>
            </div>
            <div className="dish-item">
              <img 
                src={lavaImg} 
                alt="Chocolate Lava Cake" 
                className="food-image" 
              />
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
              "The best dining experience I've had in years. The food is always fresh and delicious!"
              <footer>- Sarah L.</footer>
            </blockquote>
            <blockquote>
              "Charliovski's is the perfect place for any occasion. The ambiance and service are top-notch."
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
              <strong>Free Dessert</strong>: Get a free dessert with any entrée purchase on your birthday.
            </li>
          </ul>
        </div>

        <div className="text-section">
          <h3 className="centered">Our Gallery</h3>
          <div className="gallery">
            <img 
              src={exterior1Img} 
              alt="Restaurant Exterior 1" 
              className="exterior-image" 
            />
            <img 
              src={exterior2Img} 
              alt="Restaurant Exterior 2" 
              className="exterior-image" 
            />
          </div>
        </div>

        <div className="text-section iframe-section">
          <div className="iframe-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0195561641245!2d-122.40135008468195!3d37.78874597975633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d1f5e7e9%3A0xbde81d2c3b3e3d3b!2sGoogle!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus" 
              allowFullScreen
              loading="lazy"
              title="Google Maps">
            </iframe>
          </div>
        </div>

        <div className="text-section centered">
          <Link to="/reservations" className="button">Make a Reservation</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
