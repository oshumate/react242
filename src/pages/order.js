import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './order.css';

const Order = () => {
  return (
    <div>
      <Header />

      <div className="content">
        <h2>Order Online</h2>
        <p>
          Welcome to our online ordering platform! Explore our new features,
          special offers, and more below. With just a few clicks, you can
          enjoy your favorite Charliovski’s dishes at home.
        </p>

        <div className="additional-section">
          <h4>Featured Items</h4>
          <p>
            Try some of our best-selling dishes before checking out our full
            menu options below!
          </p>
          <div className="dish-grid">
            <div className="dish-card">
              <h5>Omelette Deluxe</h5>
              <p>Fluffy eggs loaded with cheese, veggies, and your choice of protein.</p>
            </div>
            <div className="dish-card">
              <h5>Margherita Pizza</h5>
              <p>Classic tomato sauce, mozzarella, and basil on a hand-tossed crust.</p>
            </div>
            <div className="dish-card">
              <h5>Grilled Ribeye Steak</h5>
              <p>Juicy steak grilled to perfection, served with our signature sauce.</p>
            </div>
            <div className="dish-card">
              <h5>Chocolate Lava Cake</h5>
              <p>Rich chocolate cake with a molten center, served warm with ice cream.</p>
            </div>
          </div>
        </div>

        <div className="additional-section">
          <h4>Ordering & Delivery FAQ</h4>
          <p><strong>Delivery Range:</strong> We deliver within a 5-mile radius of each Charliovski’s location.</p>
          <p><strong>Pickup Orders:</strong> You can also opt for curbside pickup at no extra charge.</p>
          <p><strong>Payment Options:</strong> We accept major credit cards and digital wallets. Cash is accepted for in-store pickups.</p>
          <p>
            <strong>Need Catering?</strong> For large or corporate orders, please{' '}
            <Link to="/contact">contact us</Link> for a custom quote.
          </p>
        </div>

        <div className="order-form">
          <h3>Place Your Order</h3>
          <form action="submit_order.php" method="POST">
            <div className="menu-category">
              <h4>Breakfast</h4>
              <div className="menu-item">
                <input type="checkbox" name="items[Classic Pancakes]" id="pancakes" />
                <label htmlFor="pancakes">Classic Pancakes</label>
                <input type="number" name="quantities[Classic Pancakes]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[French Toast]" id="french-toast" />
                <label htmlFor="french-toast">French Toast</label>
                <input type="number" name="quantities[French Toast]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[Omelette Deluxe]" id="omelette-deluxe" />
                <label htmlFor="omelette-deluxe">Omelette Deluxe</label>
                <input type="number" name="quantities[Omelette Deluxe]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[Breakfast Burrito]" id="burrito" />
                <label htmlFor="burrito">Breakfast Burrito</label>
                <input type="number" name="quantities[Breakfast Burrito]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[Avocado Toast]" id="avocado-toast" />
                <label htmlFor="avocado-toast">Avocado Toast</label>
                <input type="number" name="quantities[Avocado Toast]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[Eggs Benedict]" id="eggs-benedict" />
                <label htmlFor="eggs-benedict">Eggs Benedict</label>
                <input type="number" name="quantities[Eggs Benedict]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[Blueberry Muffin]" id="blueberry-muffin" />
                <label htmlFor="blueberry-muffin">Blueberry Muffin</label>
                <input type="number" name="quantities[Blueberry Muffin]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[Hash Brown Platter]" id="hash-brown" />
                <label htmlFor="hash-brown">Hash Brown Platter</label>
                <input type="number" name="quantities[Hash Brown Platter]" min="1" defaultValue="1" />
              </div>
            </div>

            <div className="menu-category">
              <h4>Lunch</h4>
              <div className="menu-item">
                <input type="checkbox" name="items[Grilled Chicken Sandwich]" id="grilled-chicken-sandwich" />
                <label htmlFor="grilled-chicken-sandwich">Grilled Chicken Sandwich</label>
                <input type="number" name="quantities[Grilled Chicken Sandwich]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[Club Sandwich]" id="club-sandwich" />
                <label htmlFor="club-sandwich">Club Sandwich</label>
                <input type="number" name="quantities[Club Sandwich]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[Caesar Salad]" id="caesar-salad" />
                <label htmlFor="caesar-salad">Caesar Salad</label>
                <input type="number" name="quantities[Caesar Salad]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[BBQ Pulled Pork Sandwich]" id="pulled-pork" />
                <label htmlFor="pulled-pork">BBQ Pulled Pork Sandwich</label>
                <input type="number" name="quantities[BBQ Pulled Pork Sandwich]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[Margherita Pizza]" id="margherita-pizza" />
                <label htmlFor="margherita-pizza">Margherita Pizza</label>
                <input type="number" name="quantities[Margherita Pizza]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[Turkey Avocado Wrap]" id="turkey-avocado-wrap" />
                <label htmlFor="turkey-avocado-wrap">Turkey Avocado Wrap</label>
                <input type="number" name="quantities[Turkey Avocado Wrap]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[Veggie Burger]" id="veggie-burger" />
                <label htmlFor="veggie-burger">Veggie Burger</label>
                <input type="number" name="quantities[Veggie Burger]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[French Dip Sandwich]" id="french-dip" />
                <label htmlFor="french-dip">French Dip Sandwich</label>
                <input type="number" name="quantities[French Dip Sandwich]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[Greek Salad]" id="greek-salad" />
                <label htmlFor="greek-salad">Greek Salad</label>
                <input type="number" name="quantities[Greek Salad]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[Caprese Panini]" id="caprese-panini" />
                <label htmlFor="caprese-panini">Caprese Panini</label>
                <input type="number" name="quantities[Caprese Panini]" min="1" defaultValue="1" />
              </div>
            </div>

            <div className="menu-category">
              <h4>Dinner</h4>
              <div className="menu-item">
                <input type="checkbox" name="items[Grilled Ribeye Steak]" id="ribeye" />
                <label htmlFor="ribeye">Grilled Ribeye Steak</label>
                <input type="number" name="quantities[Grilled Ribeye Steak]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[Pan-Seared Salmon]" id="salmon" />
                <label htmlFor="salmon">Pan-Seared Salmon</label>
                <input type="number" name="quantities[Pan-Seared Salmon]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[Chicken Alfredo Pasta]" id="alfredo" />
                <label htmlFor="alfredo">Chicken Alfredo Pasta</label>
                <input type="number" name="quantities[Chicken Alfredo Pasta]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[Beef Tenderloin]" id="beef-tenderloin" />
                <label htmlFor="beef-tenderloin">Beef Tenderloin</label>
                <input type="number" name="quantities[Beef Tenderloin]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[Eggplant Parmesan]" id="eggplant-parmesan" />
                <label htmlFor="eggplant-parmesan">Eggplant Parmesan</label>
                <input type="number" name="quantities[Eggplant Parmesan]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[Lobster Tail]" id="lobster-tail" />
                <label htmlFor="lobster-tail">Lobster Tail</label>
                <input type="number" name="quantities[Lobster Tail]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[Stuffed Bell Peppers]" id="stuffed-peppers" />
                <label htmlFor="stuffed-peppers">Stuffed Bell Peppers</label>
                <input type="number" name="quantities[Stuffed Bell Peppers]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[Seafood Paella]" id="seafood-paella" />
                <label htmlFor="seafood-paella">Seafood Paella</label>
                <input type="number" name="quantities[Seafood Paella]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[BBQ Baby Back Ribs]" id="baby-back-ribs" />
                <label htmlFor="baby-back-ribs">BBQ Baby Back Ribs</label>
                <input type="number" name="quantities[BBQ Baby Back Ribs]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[Mushroom Risotto]" id="mushroom-risotto" />
                <label htmlFor="mushroom-risotto">Mushroom Risotto</label>
                <input type="number" name="quantities[Mushroom Risotto]" min="1" defaultValue="1" />
              </div>
            </div>

            <div className="menu-category">
              <h4>Desserts</h4>
              <div className="menu-item">
                <input type="checkbox" name="items[Chocolate Lava Cake]" id="lava-cake" />
                <label htmlFor="lava-cake">Chocolate Lava Cake</label>
                <input type="number" name="quantities[Chocolate Lava Cake]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[Cheesecake]" id="cheesecake" />
                <label htmlFor="cheesecake">Cheesecake</label>
                <input type="number" name="quantities[Cheesecake]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[Tiramisu]" id="tiramisu" />
                <label htmlFor="tiramisu">Tiramisu</label>
                <input type="number" name="quantities[Tiramisu]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[Crème Brûlée]" id="creme-brulee" />
                <label htmlFor="creme-brulee">Crème Brûlée</label>
                <input type="number" name="quantities[Crème Brûlée]" min="1" defaultValue="1" />
              </div>
              <div className="menu-item">
                <input type="checkbox" name="items[Apple Pie]" id="apple-pie" />
                <label htmlFor="apple-pie">Apple Pie</label>
                <input type="number" name="quantities[Apple Pie]" min="1" defaultValue="1" />
              </div>
            </div>

            <div className="customer-info">
              <label htmlFor="customer-name">Full Name</label>
              <input
                type="text"
                id="customer-name"
                name="customer_name"
                placeholder="Enter your full name"
                required
              />

              <label htmlFor="customer-email">Email Address</label>
              <input
                type="email"
                id="customer-email"
                name="customer_email"
                placeholder="Enter your email"
                required
              />

              <label htmlFor="customer-phone">Phone Number</label>
              <input
                type="tel"
                id="customer-phone"
                name="customer_phone"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <button type="submit" className="place-order-btn">
              Place Order
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Order;
