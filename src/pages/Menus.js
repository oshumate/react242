import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DishItem from '../components/DishItem';
import './Menus.css';

// Import static images from the local images folder
import breakfastImg from './images/breakfast.jpg';
import lunchImg from './images/lunch.jpg';
import dinnerImg from './images/dinner.jpg';
import dessertImg from './images/dessert.jpg';

const Menus = () => {
  const [jsonMenu, setJsonMenu] = useState({});

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/oshumate/oshumate.github.io/main/242/projects/part3/menus.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Group items by category
        const categories = {};
        data.forEach(item => {
          if (!categories[item.category]) {
            categories[item.category] = [];
          }
          categories[item.category].push(item);
        });
        setJsonMenu(categories);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <div>
      <Header />

      <div className="content">
        <h2>Our Menus</h2>
        <p>
          At Charliovski’s, we offer a wide variety of dishes for every meal of the day.
          Below you'll find our complete menu (hard-coded) along with a section loaded dynamically from JSON.
        </p>
        
        {/* Static Menu Sections */}
        <div className="menu-section">
          <img src={breakfastImg} alt="Breakfast Dishes" />
          <h3>Breakfast</h3>
          <ul>
            <li>Classic Pancakes – Fluffy pancakes served with syrup and butter.</li>
            <li>French Toast – Golden-brown with a hint of cinnamon and powdered sugar.</li>
            <li>Omelette Deluxe – Choose your fillings from cheese, ham, peppers, and more.</li>
            <li>Breakfast Burrito – Scrambled eggs, cheese, and sausage wrapped in a tortilla.</li>
            <li>Avocado Toast – Fresh avocado on toasted sourdough with a drizzle of olive oil.</li>
            <li>Eggs Benedict – Poached eggs and Canadian bacon on an English muffin, topped with hollandaise sauce.</li>
            <li>Blueberry Muffin – A soft and fluffy muffin loaded with fresh blueberries.</li>
            <li>Hash Brown Platter – Crispy golden hash browns served with a side of ketchup or sour cream.</li>
          </ul>
        </div>
        <div className="menu-section">
          <img src={lunchImg} alt="Lunch Dishes" />
          <h3>Lunch</h3>
          <ul>
            <li>Grilled Chicken Sandwich – Juicy grilled chicken on a toasted bun with lettuce, tomato, and mayo.</li>
            <li>Club Sandwich – A triple-decker sandwich with turkey, bacon, lettuce, tomato, and mayo.</li>
            <li>Caesar Salad – Crisp romaine lettuce in a creamy Caesar dressing, topped with croutons and parmesan.</li>
            <li>BBQ Pulled Pork Sandwich – Tender pulled pork smothered in BBQ sauce on a soft bun with coleslaw.</li>
            <li>Margherita Pizza – A classic pizza topped with fresh mozzarella, basil, and a rich tomato sauce.</li>
            <li>Turkey Avocado Wrap – Sliced turkey, avocado, lettuce, and tomato in a whole wheat tortilla.</li>
            <li>Veggie Burger – A flavorful plant-based patty with lettuce, tomato, and house-made aioli.</li>
            <li>French Dip Sandwich – Sliced roast beef on a toasted hoagie roll, served with au jus.</li>
            <li>Greek Salad – Cucumbers, tomatoes, olives, feta cheese, and red onions in a zesty Greek dressing.</li>
            <li>Caprese Panini – Mozzarella, tomatoes, and basil pressed in crispy ciabatta with balsamic glaze.</li>
          </ul>
        </div>
        <div className="menu-section">
          <img src={dinnerImg} alt="Dinner Dishes" />
          <h3>Dinner</h3>
          <ul>
            <li>Grilled Ribeye Steak – A tender, juicy steak grilled to perfection, with veggies and mashed potatoes.</li>
            <li>Pan-Seared Salmon – Fresh salmon fillet seared golden, served with lemon butter sauce.</li>
            <li>Chicken Alfredo Pasta – Creamy alfredo sauce over fettuccine, topped with grilled chicken and parmesan.</li>
            <li>Beef Tenderloin – Perfectly cooked beef tenderloin with a red wine reduction sauce.</li>
            <li>Eggplant Parmesan – Breaded, fried eggplant layered with marinara and melted mozzarella.</li>
            <li>Lobster Tail – Butter-basted lobster tail broiled to perfection, served with garlic butter and asparagus.</li>
            <li>Stuffed Bell Peppers – Roasted peppers filled with seasoned ground beef, rice, and tomato sauce.</li>
            <li>Seafood Paella – A saffron-infused rice dish with shrimp, mussels, and calamari.</li>
            <li>BBQ Baby Back Ribs – Slow-cooked, fall-off-the-bone ribs with a smoky barbecue sauce.</li>
            <li>Mushroom Risotto – Creamy risotto with wild mushrooms and finished with parmesan cheese.</li>
          </ul>
        </div>
        <div className="menu-section">
          <img src={dessertImg} alt="Desserts" />
          <h3>Desserts</h3>
          <ul>
            <li>Chocolate Lava Cake – A rich chocolate cake with a molten center, served warm with vanilla ice cream.</li>
            <li>Cheesecake – Creamy cheesecake with a graham cracker crust, topped with a berry compote.</li>
            <li>Tiramisu – Layers of coffee-soaked ladyfingers, mascarpone cream, and a dusting of cocoa powder.</li>
            <li>Crème Brûlée – A classic French custard dessert with a caramelized sugar crust.</li>
            <li>Apple Pie – A warm spiced apple pie served with a scoop of vanilla ice cream.</li>
          </ul>
        </div>
        
        {/* Dynamic JSON Menu Section using DishItem component */}
        <div id="json-menu">
          <h2>Notable Menu Options</h2>
          {Object.entries(jsonMenu).map(([category, dishes]) => (
            <div key={category} className="menu-section">
              <h3>{category}</h3>
              {dishes.map((dish, index) => (
                <DishItem key={index} dish={dish} />
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
