import React from 'react';
import './Breakfast.css';
import breakfastImg from './images/breakfast.jpg';

const Breakfast = () => {
  return (
    <div className="menu-section breakfast">
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
  );
};

export default Breakfast;
