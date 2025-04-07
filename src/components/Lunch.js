import React from 'react';
import './Lunch.css';
import lunchImg from './images/lunch.jpg';

const Lunch = () => {
  return (
    <div className="menu-section lunch">
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
  );
};

export default Lunch;
