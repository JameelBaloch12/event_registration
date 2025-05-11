import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AdminNavbar.css';  // Create a CSS file to style the navbar

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <div className="logo">
        <h2>Eventify Admin</h2>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/add-event">Create Event</Link>
        </li>
        <li>
          <Link to="/admin/manage-events">Manage Events</Link>
        </li>
        <li>
          <Link to="/admin/manage-user">Manage User</Link>
        </li>

        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
