import React, { useState, useEffect } from 'react';

const UserEvents = () => {
  // Example static event data for now, this should ideally come from your database
  const [events, setEvents] = useState([
    { id: 1, name: "Music Concert", date: "2025-07-20", description: "A thrilling music experience." },
    { id: 2, name: "Tech Conference", date: "2025-08-10", description: "Learn the latest in technology." },
  ]);
  
  const handleRegister = (eventId) => {
    console.log(`User registered for event with ID: ${eventId}`);
    // Here, you can add functionality to save registration (API call to save to the backend)
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Available Events</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p><strong>Date:</strong> {event.date}</p>
            <button onClick={() => handleRegister(event.id)}>Register</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserEvents;
