import React from 'react';
import './Dessert.css';
import dessertImg from './images/dessert.jpg';

const Dessert = () => {
  return (
    <div className="menu-section dessert">
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
  );
};

export default Dessert;
