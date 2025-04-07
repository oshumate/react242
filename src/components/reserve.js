import React from 'react';
import './reserve.css';

const Reserve = () => {
  return (
    <div className="reservation-form">
      <h3>Make a Reservation</h3>
      <form action="submit_reservation.php" method="POST">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="date">Reservation Date</label>
          <input type="date" id="date" name="date" required />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <select id="time" name="time" required>
            <option value="12:00 PM">12:00 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="6:00 PM">6:00 PM</option>
            <option value="8:00 PM">8:00 PM</option>
          </select>
        </div>
        <button type="submit" className="button">Confirm Reservation</button>
      </form>
    </div>
  );
};

export default Reserve;
