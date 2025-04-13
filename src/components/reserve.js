import React, { useState, useEffect } from 'react';
import './reserve.css';

const Reserve = () => {
  // State for form inputs.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: ''
  });

  // State for feedback, reservations list, and available time slots.
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [reservations, setReservations] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);

  // The API endpoint for reservations.
  const reservationsURL = 'https://render242.onrender.com/api/reservations';

  // Fetch reservations from the server.
  const fetchReservations = async () => {
    try {
      const response = await fetch(reservationsURL);
      if (!response.ok) throw new Error('Error fetching reservations');
      const data = await response.json();
      console.log('Reservations fetched:', data);
      setReservations(data.reservations);
    } catch (err) {
      console.error(err);
      setError('Error fetching reservations. Please try again later.');
    }
  };

  // Fetch reservations when the component mounts.
  useEffect(() => {
    fetchReservations();
  }, []);

  // Additionally, refetch reservations whenever a new date is selected.
  useEffect(() => {
    if (formData.date) {
      fetchReservations();
    }
  }, [formData.date]);

  // Helper to format a Date object to "h:mm AM/PM".
  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let suffix = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutes} ${suffix}`;
  };

  // Generate available time slots when a date is selected or when reservations change.
  useEffect(() => {
    if (!formData.date) {
      setAvailableTimes([]);
      return;
    }

    const dateObj = new Date(formData.date);
    const day = dateObj.getDay(); // Sunday is 0, Monday is 1, ... Saturday is 6.
    let startHour, endHour;

    // Monday to Friday.
    if (day >= 1 && day <= 5) {
      startHour = 10;
      endHour = 22;
    } else {
      // Saturday or Sunday.
      startHour = 11;
      endHour = 23;
    }

    const slots = [];
    let currentTime = new Date(dateObj);
    currentTime.setHours(startHour, 0, 0, 0);
    const endTime = new Date(dateObj);
    endTime.setHours(endHour, 0, 0, 0);

    // Create slots every 15 minutes.
    while (currentTime <= endTime) {
      slots.push(formatTime(new Date(currentTime)));
      currentTime.setMinutes(currentTime.getMinutes() + 15);
    }

    // Get reserved times for the selected date.
    const reservedTimes = reservations
      .filter(r => r.date === formData.date)
      .map(r => r.time);

    // Filter out the reserved slots.
    const available = slots.filter(time => !reservedTimes.includes(time));

    // Update selected time if necessary.
    if (available.length > 0 && !available.includes(formData.time)) {
      setFormData(prev => ({ ...prev, time: available[0] }));
    } else if (available.length === 0) {
      setFormData(prev => ({ ...prev, time: '' }));
    }

    setAvailableTimes(available);
  }, [formData.date, reservations]);

  // Simple client-side validation.
  const validate = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      setError('Please fill in all the fields.');
      return false;
    }
    // Basic email regex.
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  // Handle input changes.
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  // Handle the reservation form submission.
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Check if a reservation already exists for this date and time.
    const duplicateReservation = reservations.some(
      r => r.date === formData.date && r.time === formData.time
    );
    if (duplicateReservation) {
      setError('This time slot is already reserved. Please choose another time.');
      return;
    }

    try {
      const response = await fetch(reservationsURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log('Reservation POST response:', data);
      if (data.success) {
        setMessage('Reservation confirmed!');
        alert('Reservation confirmed!');
        // Reset the form.
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: ''
        });
        fetchReservations(); // Refresh the reservations list.
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
              disabled={!formData.date || availableTimes.length === 0}
            >
              {availableTimes.length > 0 ? (
                availableTimes.map((timeSlot, index) => (
                  <option key={index} value={timeSlot}>
                    {timeSlot}
                  </option>
                ))
              ) : (
                <option value="">Select a date for available times</option>
              )}
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
