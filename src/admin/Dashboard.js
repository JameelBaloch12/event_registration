import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // for redirection
import '../styles/AdminDashboard.css'; // Importing the CSS file for styling
import AdminNavbar from './AdminNavbar'; // Correctly import AdminNavbar

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalEvents, setTotalEvents] = useState(0);
  const navigate = useNavigate();

  // Fetch data (users, events) from API or local storage
  useEffect(() => {
    fetchUsers();
    fetchEvents();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch('http://localhost:5000/get-users');
    const data = await response.json();
    setUsers(data.users);
    setTotalUsers(data.users.length);
  };

  const fetchEvents = async () => {
    const response = await fetch('http://localhost:5000/get-events');
    const data = await response.json();
    setEvents(data.events);
    setTotalEvents(data.events.length);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <AdminNavbar /> {/* Use the AdminNavbar component here */}

      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <nav>
          <ul>
            <li onClick={() => navigate('/admin/users')}>Users</li>
            <li onClick={() => navigate('/admin/events')}>Events</li>
            <li onClick={() => navigate('/admin/reports')}>Reports</li>
            <li onClick={handleLogout}>Logout</li>
          </ul>
        </nav>
      </div>

      <div className="main-content">
        <div className="header">
          <h1>Welcome, Admin!</h1>
        </div>

        <div className="stats">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p>{totalUsers}</p>
          </div>
          <div className="stat-card">
            <h3>Total Events</h3>
            <p>{totalEvents}</p>
          </div>
        </div>

        <div className="recent-items">
          <h2>Recent Users</h2>
          <ul>
            {users.slice(0, 5).map(user => (
              <li key={user.id}>
                {user.name} ({user.email})
              </li>
            ))}
          </ul>

          <h2>Recent Events</h2>
          <ul>
            {events.slice(0, 5).map(event => (
              <li key={event.id}>
                {event.name} ({event.date})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
