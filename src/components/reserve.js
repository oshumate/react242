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

  const BASE = 'https://render242.onrender.com/api/reservations';

  // load list
  const fetchReservations = async () => {
    try {
      const res = await fetch(BASE);
      if (!res.ok) throw new Error();
      const { reservations } = await res.json();
      setReservations(reservations);
    } catch {
      setError('Could not load reservations.');
    }
  };

  useEffect(fetchReservations, []);

  // recompute slots whenever date, list, or edit‑mode changes
  useEffect(() => {
    if (!formData.date) return setAvailableTimes([]);
    const d = new Date(formData.date);
    const day = d.getDay();
    const start = day >= 1 && day <= 5 ? 10 : 11;
    const end   = day >= 1 && day <= 5 ? 22 : 23;

    const slots = [];
    const cur = new Date(d);
    cur.setHours(start, 0, 0, 0);
    const cutoff = new Date(d);
    cutoff.setHours(end, 0, 0, 0);

    while (cur <= cutoff) {
      const h = cur.getHours() % 12 || 12;
      const m = cur.getMinutes().toString().padStart(2, '0');
      const suffix = cur.getHours() >= 12 ? 'PM' : 'AM';
      slots.push(`${h}:${m} ${suffix}`);
      cur.setMinutes(cur.getMinutes() + 15);
    }

    // exclude times taken by others (but allow the one we're editing)
    const taken = reservations
      .filter(r => r.date === formData.date && r._id !== editingId)
      .map(r => r.time);

    const avail = slots.filter(t => !taken.includes(t));
    setAvailableTimes(avail);

    if (!avail.includes(formData.time)) {
      setFormData(fd => ({ ...fd, time: avail[0] || '' }));
    }
  }, [formData.date, reservations, editingId]);

  const validate = () => {
    if (!formData.name || !formData.email || !formData.phone
      || !formData.date || !formData.time) {
      setError('Please fill in all fields.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Invalid email format.');
      return false;
    }
    return true;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(fd => ({ ...fd, [name]: value }));
    setError('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;

    const method = editingId ? 'PUT' : 'POST';
    const url    = editingId ? `${BASE}/${editingId}` : BASE;

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Server error');

      setMessage(editingId ? 'Reservation updated!' : 'Reservation confirmed!');
      setError('');
      setEditingId(null);
      setFormData({ name:'', email:'', phone:'', date:'', time:'' });
      fetchReservations();
    } catch (err) {
      setError(err.message);
    }
  };

  const startEdit = r => {
    setEditingId(r._id);
    setFormData({
      name:  r.name,
      email: r.email,
      phone: r.phone,
      date:  r.date,
      time:  r.time
    });
    setMessage('');
    setError('');
  };

  const handleDelete = async id => {
    if (!window.confirm('Delete this reservation?')) return;
    try {
      const res = await fetch(`${BASE}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error();
      setMessage('Reservation deleted.');
      fetchReservations();
    } catch {
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
          {/* === Name === */}
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* === Email === */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* === Phone === */}
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* === Date === */}
          <div className="form-group">
            <label htmlFor="date">Reservation Date</label>
            <input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          {/* === Time === */}
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
              {availableTimes.length > 0
                ? availableTimes.map((t,i) => <option key={i} value={t}>{t}</option>)
                : <option value="">Select a date for times</option>
              }
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
                setFormData({ name:'',email:'',phone:'',date:'',time:'' });
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
                <button
                  type="button"
                  onClick={() => startEdit(r)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(r._id)}
                >
                  Delete
                </button>
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
