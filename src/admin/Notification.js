import React, { useEffect, useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulated API call
    const fetchNotifications = async () => {
      const dummyNotifications = [
        {
          id: 1,
          message: 'John Doe registered for "Tech Conference 2025".',
          timestamp: '2025-04-19 10:30 AM'
        },
        {
          id: 2,
          message: 'Jane Smith registered for "Startup Meetup".',
          timestamp: '2025-04-19 10:15 AM'
        },
        {
          id: 3,
          message: 'Michael Scott registered for "Design Thinking Workshop".',
          timestamp: '2025-04-18 4:45 PM'
        }
      ];
      setNotifications(dummyNotifications);
    };

    fetchNotifications();
  }, []);

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Notifications</h2>
      {notifications.length === 0 ? (
        <p style={emptyStyle}>No new notifications</p>
      ) : (
        <ul style={listStyle}>
          {notifications.map(notification => (
            <li key={notification.id} style={itemStyle}>
              <div style={messageStyle}>{notification.message}</div>
              <div style={timestampStyle}>{notification.timestamp}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Styling
const containerStyle = {
  padding: '2rem',
  backgroundColor: '#f9fafb',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
};

const titleStyle = {
  fontSize: '1.5rem',
  marginBottom: '1.5rem',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const itemStyle = {
  backgroundColor: '#ffffff',
  padding: '1rem',
  borderRadius: '8px',
  marginBottom: '1rem',
  boxShadow: '0 1px 4px rgba(0, 0, 0, 0.03)',
};

const messageStyle = {
  fontWeight: '500',
  marginBottom: '0.5rem',
};

const timestampStyle = {
  fontSize: '0.875rem',
  color: '#6b7280',
};

const emptyStyle = {
  fontStyle: 'italic',
  color: '#94a3b8',
};

export default Notifications;
