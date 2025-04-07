import React from 'react';
import './Dinner.css';
import dinnerImg from './images/dinner.jpg';

const Dinner = () => {
  return (
    <div className="menu-section dinner">
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
  );
};

export default Dinner;
