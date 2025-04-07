import React, { useState } from 'react';
import './OrderMenuItem.css';

const OrderMenuItem = ({ itemName, label, defaultQuantity = 1 }) => {
  const [selected, setSelected] = useState(false);

  const handleCheckboxChange = () => {
    setSelected(!selected);
  };

  return (
    <div className="menu-item">
      <label>
        <input 
          type="checkbox" 
          name={`items[${itemName}]`} 
          checked={selected} 
          onChange={handleCheckboxChange} 
        />
        <span>{label}</span>
      </label>
      {selected && (
        <input 
          type="number" 
          name={`quantities[${itemName}]`} 
          min="1" 
          defaultValue={defaultQuantity}
          className="quantity-input"
        />
      )}
    </div>
  );
};

export default OrderMenuItem;
