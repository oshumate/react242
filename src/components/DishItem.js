import React from 'react';
import './DishItem.css';

const DishItem = ({ dish, imgClass }) => {
  // Remove the "images/" prefix so we can require the file from pages/images.
  const fileName = dish.img_name.replace(/^images\//, '');
  let imageSrc;
  try {
    // Since DishItem is in src/components and images are in src/pages/images,
    // we use the relative path "../pages/images/..."
    imageSrc = require(`../pages/images/${fileName}`);
  } catch (error) {
    console.error("Error loading image:", error);
    imageSrc = ''; // Optionally set a fallback image path here.
  }

  return (
    <div className="dish">
      <img 
        className={imgClass} 
        src={imageSrc} 
        alt={dish.dishName} 
      />
      <div className="dish-info">
        <h4>{dish.dishName}</h4>
        <p>{dish.description}</p>
        <p>{dish.price}</p>
      </div>
    </div>
  );
};

export default DishItem;
