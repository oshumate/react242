import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DishItem from '../components/DishItem';
import Breakfast from '../components/Breakfast';
import Lunch from '../components/Lunch';
import Dinner from '../components/Dinner';
import Dessert from '../components/Dessert';
import './Menus.css';
import jsonMenuData from '../components/menus.json';

const Menus = () => {
  const [jsonMenu, setJsonMenu] = useState({});

  useEffect(() => {
    // Group imported JSON data by category.
    const categories = {};
    jsonMenuData.forEach(item => {
      if (!categories[item.category]) {
        categories[item.category] = [];
      }
      categories[item.category].push(item);
    });
    setJsonMenu(categories);
  }, []);

  return (
    <div>
      <Header />
      <div className="content">
        <h2>Our Menus</h2>
        <p>
          At Charliovski’s, we offer a wide variety of dishes for every meal of the day.
          Below you'll find our complete menu along with a section loaded dynamically from JSON.
        </p>
        
        {/* Static Menu Sections */}
        <Breakfast />
        <Lunch />
        <Dinner />
        <Dessert />

        {/* Dynamic JSON Menu Section using DishItem component */}
        <div id="json-menu">
          <h2>Notable Menu Options</h2>
          {Object.entries(jsonMenu).map(([category, dishes]) => (
            <div key={category} className="menu-section">
              <h3>{category}</h3>
              {dishes.map(dish => (
                <DishItem key={dish._id} dish={dish} imgClass="small-image" />
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menus;
