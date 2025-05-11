import React, { useState, useEffect } from 'react';

const ManageEvents = () => {
  const [events, setEvents] = useState([]);

  // Mocking a fetch request to get event data
  useEffect(() => {
    const mockEvents = [
      {
        id: 1,
        name: 'Tech Conference 2025',
        date: '2025-05-30',
        location: 'New York',
        status: 'Active',
      },
      {
        id: 2,
        name: 'Music Festival 2025',
        date: '2025-06-15',
        location: 'Los Angeles',
        status: 'Inactive',
      },
      // Add more events here
    ];
    setEvents(mockEvents);
  }, []);

  return (
    <div>
      <h2>Manage Events</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Location</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td>{event.location}</td>
              <td>{event.status}</td>
              <td>
                {/* You can add buttons for editing or deleting events here */}
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageEvents;
