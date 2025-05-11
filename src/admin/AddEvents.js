import React, { useState } from 'react';
import AdminNavbar from '../admin/AdminNavbar';
import '../styles/CreateEvent.css';

const AddEvent = ({ events, setEvents }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate adding an event
    const newEvent = {
      id: events.length + 1, // Simple ID generator
      name: eventName,
      date: eventDate,
    };
    setEvents([...events, newEvent]);
    setEventName('');
    setEventDate('');
  };

  return (
    <div>
      <AdminNavbar />
      <div className="add-event-container">
        <h1>Create New Event</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="event-name">Event Name</label>
            <input
              type="text"
              id="event-name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="event-date">Event Date</label>
            <input
              type="date"
              id="event-date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </div>
          <button type="submit">Create Event</button>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
