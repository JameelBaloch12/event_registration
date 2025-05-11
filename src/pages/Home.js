import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import event3 from '../assets/event3.jpg';
import event4 from '../assets/event4.jpg';
import event5 from '../assets/event5.jpg';

const HomeAttende = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const events = [
    {
      id: 1,
      name: 'Event 1',
      date: '2025-05-10',
      venue: 'Main Auditorium',
      description: 'Intro event',
      image: event1
    },
    {
      id: 2,
      name: 'Scope of Computer Science in 21st Century',
      date: '2025-06-20',
      venue: 'AB3',
      description: 'A deep dive into the evolving field of Computer Science.',
      image: event2
    },
    {
      id: 3,
      name: 'Is AI reducing Jobs?',
      date: '2025-07-15',
      venue: 'AB2',
      description: 'AI and job market insights.',
      image: event3
    },
    {
      id: 4,
      name: 'Event 3',
      date: '2025-08-22',
      venue: 'Hall A',
      description: 'Details about Event 3.',
      image: event4
    },
    {
      id: 5,
      name: 'Event 4',
      date: '2025-09-05',
      venue: 'Conference Room',
      description: 'An exciting talk at the Conference Room.',
      image: event5
    }
  ];

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
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Welcome to Eventify</h1>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Discover, explore, and register for exciting events around you.
          </p>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', minWidth: '300px' }}>
          <img
            src={events[currentImageIndex].image}
            alt="Event"
            style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px' }}
          />
        </div>
      </div>

      <h1 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Upcoming Events</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem',
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
            <img
              src={event.image}
              alt={event.name}
              style={{ width: '100%', height: '180px', objectFit: 'cover' }}
            />
            <div style={{ padding: '1rem' }}>
              <h3>{event.name}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Venue:</strong> {event.venue}</p>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                <Link to={`/register-event/${event.id}`}>
                  <button style={{
                    backgroundColor: '#2563eb',
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}>
                    Register
                  </button>
                </Link>
                <Link to={`/event-details/${event.id}`}>
                  <button style={{
                    backgroundColor: '#10b981',
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}>
                    More Info
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
