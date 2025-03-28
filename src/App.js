// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import other pages as needed, e.g. Menus, Reservations, Order, etc.

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Future routes:
        <Route path="/menus" element={<Menus />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order" element={<Order />} />
        */}
      </Routes>
    </Router>
  );
}

export default App;
