import React, { useState, useEffect } from 'react';
import './reserve.css';

const Reserve = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [reservations, setReservations] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);

  const reservationsURL = 'https://render242.onrender.com/api/reservations';

  // Fetch all reservations from server
  const fetchReservations = async () => {
    try {
      const response = await fetch(reservationsURL);
      if (!response.ok) throw new Error('Fetch failed');
      const data = await response.json();
      setReservations(data.reservations);
    } catch (err) {
      console.error(err);
      setError('Error fetching reservations. Please try again later.');
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  // Recompute available times whenever date, reservations, or editingId change
  useEffect(() => {
    if (!formData.date) {
      setAvailableTimes([]);
      return;
    }
    const dateObj = new Date(formData.date);
    const day = dateObj.getDay(); // 0 = Sunday, …, 6 = Saturday
    const startHour = (day >= 1 && day <= 5) ? 10 : 11;
    const endHour   = (day >= 1 && day <= 5) ? 22 : 23;

    const slots = [];
    const cur = new Date(dateObj);
    cur.setHours(startHour, 0, 0, 0);
    const end = new Date(dateObj);
    end.setHours(endHour, 0, 0, 0);

    while (cur <= end) {
      const h = cur.getHours() % 12 || 12;
      const m = cur.getMinutes().toString().padStart(2, '0');
      const suffix = cur.getHours() >= 12 ? 'PM' : 'AM';
      slots.push(`${h}:${m} ${suffix}`);
      cur.setMinutes(cur.getMinutes() + 15);
    }

    const taken = reservations
      .filter(r => r.date === formData.date && r._id !== editingId)
      .map(r => r.time);

    const avail = slots.filter(t => !taken.includes(t));
    setAvailableTimes(avail);
    // default to first available if current selection is gone
    if (!avail.includes(formData.time)) {
      setFormData(d => ({ ...d, time: avail[0] || '' }));
    }
  }, [formData.date, reservations, editingId]);

  // Simple client‑side validation
  const validate = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      setError('Please fill in all the fields.');
      return false;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(d => ({ ...d, [name]: value }));
    setError('');
  };

  // Handles both create and update
  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;

    const method = editingId ? 'PUT' : 'POST';
    const url = editingId
      ? `${reservationsURL}/${editingId}`
      : reservationsURL;

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Server error');

      setMessage(editingId ? 'Reservation updated!' : 'Reservation confirmed!');
      setError('');
      setEditingId(null);
      setFormData({ name: '', email: '', phone: '', date: '', time: '' });
      fetchReservations();
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  // Start editing an existing reservation
  const startEdit = r => {
    setEditingId(r._id);
    setFormData({
      name: r.name,
      email: r.email,
      phone: r.phone,
      date: r.date,
      time: r.time
    });
    setMessage('');
    setError('');
  };

  // Delete reservation by ID
  const handleDelete = async id => {
    if (!window.confirm('Delete this reservation?')) return;

    try {
      const response = await fetch(`${reservationsURL}/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Delete failed');
      setMessage('Reservation deleted.');
      setError('');
      fetchReservations();
    } catch (err) {
      console.error(err);
      setError('Could not delete reservation.');
    }
  };

  return (
    <div className="reservation-container">
      <div className="reservation-form">
        <h3>{editingId ? 'Edit Reservation' : 'Make a Reservation'}</h3>
        {message && <p className="success-message">{message}</p>}
        {error   && <p className="error-message">{error}</p>}

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
                availableTimes.map((t, i) => (
                  <option key={i} value={t}>{t}</option>
                ))
              ) : (
                <option value="">Select a date for available times</option>
              )}
            </select>
          </div>

          <button type="submit" className="button">
            {editingId ? 'Update' : 'Confirm'}
          </button>
          {editingId && (
            <button
              type="button"
              className="button cancel"
              onClick={() => {
                setEditingId(null);
                setFormData({ name:'', email:'', phone:'', date:'', time:'' });
                setError('');
                setMessage('');
              }}
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      <div className="reservations-list">
        <h3>Reservations</h3>
        {reservations.length > 0 ? (
          <ul>
            {reservations.map(r => (
              <li key={r._id}>
                {r.name} — {r.email} — {r.phone} — {r.date} @ {r.time}
                <button onClick={() => startEdit(r)}>Edit</button>
                <button onClick={() => handleDelete(r._id)}>Delete</button>
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
