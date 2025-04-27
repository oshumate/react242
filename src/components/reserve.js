import React, { useState, useEffect } from 'react';
import './reserve.css';

const Reserve = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', time: ''
  });
  const [file, setFile] = useState(null);               // ← new
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

  // recompute slots (unchanged) …
  useEffect(() => {
    if (!formData.date) {
      setAvailableTimes([]);
      return;
    }
    const d = new Date(formData.date);
    const day = d.getDay();
    const isWeekday = day >= 1 && day <= 5;
    const startHour = isWeekday ? 10 : 11;
    const endHour   = isWeekday ? 22 : 23;
    const slots = [];
    const cur = new Date(d);
    cur.setHours(startHour, 0, 0, 0);
    const cutoff = new Date(d);
    cutoff.setHours(endHour, 0, 0, 0);
    while (cur < cutoff) {   // ← changed from <= to <
      const hour12 = cur.getHours() % 12 || 12;
      const minute = String(cur.getMinutes()).padStart(2, '0');
      const suffix = cur.getHours() >= 12 ? 'PM' : 'AM';
      slots.push(`${hour12}:${minute} ${suffix}`);
      cur.setMinutes(cur.getMinutes() + 15);
    }
    const taken = reservations
      .filter(r => r.date === formData.date && r._id !== editingId)
      .map(r => r.time);
    const avail = slots.filter(t => !taken.includes(t));
    setAvailableTimes(avail);
    if (!avail.includes(formData.time)) {
      setFormData(fd => ({ ...fd, time: avail[0] || '' }));
    }
  }, [formData.date, reservations, editingId]);

  // validate (unchanged) …
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

  // handle text changes
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(fd => ({ ...fd, [name]: value }));
    setError('');
  };

  // handle file input
  const handleFile = e => {
    setFile(e.target.files[0]);
  };

  // submit (POST/PUT) via FormData
  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;

    const method = editingId ? 'PUT' : 'POST';
    const url    = editingId ? `${BASE}/${editingId}` : BASE;
    const fd     = new FormData();
    Object.entries(formData).forEach(([k, v]) => fd.append(k, v));
    if (file) fd.append('picture', file);

    try {
      const res = await fetch(url, { method, body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Server error');
      setMessage(editingId ? 'Reservation updated!' : 'Reservation confirmed!');
      setError('');
      setEditingId(null);
      setFormData({ name:'', email:'', phone:'', date:'', time:'' });
      setFile(null);
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
    setFile(null);
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

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/* …all your existing inputs (name, email, phone, date, time) … */}

          {/* Picture input (NEW) */}
          <div className="form-group">
            <label htmlFor="picture">Picture</label>
            <input
              id="picture"
              name="picture"
              type="file"
              accept="image/*"
              onChange={handleFile}
            />
          </div>

          {/* buttons (unchanged) */}
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
                setFile(null);
                setError('');
                setMessage('');
              }}
            >Cancel</button>
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
                {/* show picture if exists */}
                {r.pictureUrl && (
                  <img
                    src={r.pictureUrl}
                    alt="Reservation"
                    style={{ maxWidth:80, marginLeft:10 }}
                  />
                )}
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
