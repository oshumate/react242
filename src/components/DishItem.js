import React from 'react';
import './DishItem.css';

const DishItem = ({ dish }) => {
  return (
    <div className="dish">
      <img src={`${process.env.PUBLIC_URL}/${dish.img_name}`} alt={dish.dishName} />
      <div className="dish-info">
        <h4>{dish.dishName}</h4>
        <p>{dish.description}</p>
        <p>{dish.price}</p>
      </div>
    </div>
  );
};

export default DishItem;
