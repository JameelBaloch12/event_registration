import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulated API call
    const fetchEvents = async () => {
      const dummyEvents = [
        {
          id: 1,
          title: 'Tech Conference 2025',
          date: '2025-06-20',
          location: 'San Francisco, CA',
          registrations: 120
        },
        {
          id: 2,
          title: 'Startup Meetup',
          date: '2025-07-10',
          location: 'New York, NY',
          registrations: 85
        },
        {
          id: 3,
          title: 'Design Thinking Workshop',
          date: '2025-08-15',
          location: 'Austin, TX',
          registrations: 50
        }
      ];
      setEvents(dummyEvents);
    };

    fetchEvents();
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this event?");
    if (confirm) {
      setEvents(events.filter(event => event.id !== id));
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: '1rem' }}>All Events</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Title</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Location</th>
            <th style={thStyle}>Registrations</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td style={tdStyle}>{event.title}</td>
              <td style={tdStyle}>{event.date}</td>
              <td style={tdStyle}>{event.location}</td>
              <td style={tdStyle}>{event.registrations}</td>
              <td style={tdStyle}>
                <Link to={`/edit-event/${event.id}`}>
                  <button style={btnStyle}>Edit</button>
                </Link>
                <button style={deleteBtnStyle} onClick={() => handleDelete(event.id)}>Delete</button>
                <Link to={`/participants?eventId=${event.id}`}>
                  <button style={btnStyle}>View Attendees</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Styles
const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
};

const thStyle = {
  borderBottom: '2px solid #e2e8f0',
  padding: '12px',
  textAlign: 'left',
  backgroundColor: '#f8fafc',
};

const tdStyle = {
  padding: '12px',
  borderBottom: '1px solid #e5e7eb',
};

const btnStyle = {
  marginRight: '0.5rem',
  padding: '6px 12px',
  backgroundColor: '#3b82f6',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

const deleteBtnStyle = {
  ...btnStyle,
  backgroundColor: '#ef4444'
};

export default EventList;
