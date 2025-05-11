import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import events from './Event';// ✅ Import from event.js

const HomeAttende = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f9fafb', padding: '2rem' }}>
      <Navbar />
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h1>Welcome to Eventify</h1>
          <p>
            Discover, explore, and register for exciting events around you.
          </p>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img
            src={events[currentImageIndex].image}
            alt="Event"
            style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px' }}
          />
        </div>
      </div>

      <h1 style={{ textAlign: 'center' }}>Upcoming Events</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {events.map((event) => (
          <div key={event.id} style={{
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <img src={event.image} alt={event.name} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h3>{event.name}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Venue:</strong> {event.venue}</p>

              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                <Link to={`/register-event/${event.id}`}>
                  <button style={{ backgroundColor: '#2563eb', color: '#fff', padding: '0.5rem 1rem', borderRadius: '6px' }}>
                    Register
                  </button>
                </Link>
                <Link to={`/event/${event.id}`}>
                  <button style={{ backgroundColor: '#e2e8f0', padding: '0.5rem 1rem', borderRadius: '6px' }}>
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeAttende;
