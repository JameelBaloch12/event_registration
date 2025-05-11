import React, { useState } from 'react';
import '../styles/CreateEvent.css';

const AddEvent = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can now send the event data to the backend
    console.log('Event Created:', { eventName, eventDate, eventDescription });
    setEventName('');
    setEventDate('');
    setEventDescription('');
  };

  return (
    <div className="add-event-container">
      <h1>Create New Event</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label>Event Name</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="Enter event name"
            required
          />
        </div>
        <div className="input-field">
          <label>Event Date</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <label>Event Description</label>
          <textarea
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            placeholder="Enter event description"
            required
          />
        </div>
        <button type="submit" className="create-button">Create Event</button>
      </form>
    </div>
  );
};

export default AddEvent;
