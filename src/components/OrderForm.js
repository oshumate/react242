import React from 'react';
import OrderMenuItem from './OrderMenuItem';
import './OrderForm.css';

const OrderForm = () => {
  return (
    <div className="order-form-wrapper">
      <h2 className="form-title">Place Your Order</h2>
      <form action="submit_order.php" method="POST" className="order-form">
        <div className="menu-section">
          <h3 className="section-title">Menu</h3>
          <div className="menu-categories">
            {/* Breakfast Section */}
            <div className="menu-category">
              <h4>Breakfast</h4>
              <div className="menu-items">
                <OrderMenuItem itemName="Classic Pancakes" label="Classic Pancakes" />
                <OrderMenuItem itemName="French Toast" label="French Toast" />
                <OrderMenuItem itemName="Omelette Deluxe" label="Omelette Deluxe" />
                <OrderMenuItem itemName="Breakfast Burrito" label="Breakfast Burrito" />
                <OrderMenuItem itemName="Avocado Toast" label="Avocado Toast" />
                <OrderMenuItem itemName="Eggs Benedict" label="Eggs Benedict" />
                <OrderMenuItem itemName="Blueberry Muffin" label="Blueberry Muffin" />
                <OrderMenuItem itemName="Hash Brown Platter" label="Hash Brown Platter" />
              </div>
            </div>
            {/* Lunch Section */}
            <div className="menu-category">
              <h4>Lunch</h4>
              <div className="menu-items">
                <OrderMenuItem itemName="Grilled Chicken Sandwich" label="Grilled Chicken Sandwich" />
                <OrderMenuItem itemName="Club Sandwich" label="Club Sandwich" />
                <OrderMenuItem itemName="Caesar Salad" label="Caesar Salad" />
                <OrderMenuItem itemName="BBQ Pulled Pork Sandwich" label="BBQ Pulled Pork Sandwich" />
                <OrderMenuItem itemName="Margherita Pizza" label="Margherita Pizza" />
                <OrderMenuItem itemName="Turkey Avocado Wrap" label="Turkey Avocado Wrap" />
                <OrderMenuItem itemName="Veggie Burger" label="Veggie Burger" />
                <OrderMenuItem itemName="French Dip Sandwich" label="French Dip Sandwich" />
                <OrderMenuItem itemName="Greek Salad" label="Greek Salad" />
                <OrderMenuItem itemName="Caprese Panini" label="Caprese Panini" />
              </div>
            </div>
            {/* Dinner Section */}
            <div className="menu-category">
              <h4>Dinner</h4>
              <div className="menu-items">
                <OrderMenuItem itemName="Grilled Ribeye Steak" label="Grilled Ribeye Steak" />
                <OrderMenuItem itemName="Pan-Seared Salmon" label="Pan-Seared Salmon" />
                <OrderMenuItem itemName="Chicken Alfredo Pasta" label="Chicken Alfredo Pasta" />
                <OrderMenuItem itemName="Beef Tenderloin" label="Beef Tenderloin" />
                <OrderMenuItem itemName="Eggplant Parmesan" label="Eggplant Parmesan" />
                <OrderMenuItem itemName="Lobster Tail" label="Lobster Tail" />
                <OrderMenuItem itemName="Stuffed Bell Peppers" label="Stuffed Bell Peppers" />
                <OrderMenuItem itemName="Seafood Paella" label="Seafood Paella" />
                <OrderMenuItem itemName="BBQ Baby Back Ribs" label="BBQ Baby Back Ribs" />
                <OrderMenuItem itemName="Mushroom Risotto" label="Mushroom Risotto" />
              </div>
            </div>
            {/* Desserts Section */}
            <div className="menu-category">
              <h4>Desserts</h4>
              <div className="menu-items">
                <OrderMenuItem itemName="Chocolate Lava Cake" label="Chocolate Lava Cake" />
                <OrderMenuItem itemName="Cheesecake" label="Cheesecake" />
                <OrderMenuItem itemName="Tiramisu" label="Tiramisu" />
                <OrderMenuItem itemName="Crème Brûlée" label="Crème Brûlée" />
                <OrderMenuItem itemName="Apple Pie" label="Apple Pie" />
              </div>
            </div>
          </div>
        </div>
        <div className="customer-section">
          <h3 className="section-title">Customer Details</h3>
          <div className="customer-fields">
            <div className="field">
              <label htmlFor="customer-name">Full Name</label>
              <input type="text" id="customer-name" name="customer_name" placeholder="Enter your full name" required />
            </div>
            <div className="field">
              <label htmlFor="customer-email">Email Address</label>
              <input type="email" id="customer-email" name="customer_email" placeholder="Enter your email" required />
            </div>
            <div className="field">
              <label htmlFor="customer-phone">Phone Number</label>
              <input type="tel" id="customer-phone" name="customer_phone" placeholder="Enter your phone number" required />
            </div>
          </div>
        </div>
        <button type="submit" className="submit-button">Place Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
