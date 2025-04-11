import React, { useState, useEffect } from 'react';
import './reserve.css';

const Reserve = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '12:00 PM'
  });
  
  // State for feedback messages and the reservations list
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [reservations, setReservations] = useState([]);

  // URL to send reservation data and fetch reservation list from
  const reservationsURL = 'https://render242.onrender.com/api/reservations';

  // Function to fetch reservations from the server
  const fetchReservations = async () => {
    try {
      const response = await fetch(reservationsURL);
      if (!response.ok) {
        throw new Error('Error fetching reservations');
      }
      const data = await response.json();
      setReservations(data.reservations);
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch reservations when the component mounts
  useEffect(() => {
    fetchReservations();
  }, []);

  // Basic client-side validation
  const validate = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      setError('Please fill in all the fields.');
      return false;
    }
    // Simple regex for validating an email address
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    try {
      const response = await fetch(reservationsURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        setMessage('Reservation confirmed!');
        // Reset the form
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '12:00 PM'
        });
        // Refresh the reservations list
        fetchReservations();
      } else {
        setError(data.message || 'Reservation could not be added.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while submitting the reservation.');
    }
  };

  return (
    <div className="reservation-container">
      <div className="reservation-form">
        <h3>Make a Reservation</h3>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Reservation Date</label>
            <input 
              type="date" 
              id="date" 
              name="date" 
              value={formData.date} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <select 
              id="time" 
              name="time" 
              value={formData.time} 
              onChange={handleChange} 
              required
            >
              <option value="12:00 PM">12:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="8:00 PM">8:00 PM</option>
            </select>
          </div>
          <button type="submit" className="button">Confirm Reservation</button>
        </form>
      </div>
      <div className="reservations-list">
        <h3>Reservations</h3>
        {reservations.length > 0 ? (
          <ul>
            {reservations.map((res, index) => (
              <li key={index}>
                {res.name} — {res.email} — {res.phone} — {res.date} at {res.time}
              </li>
            ))}
          </ul>
        ) : (
          <p>No reservations yet.</p>
        )}
      </div>
    </div>
  );
};

export default Reserve;
