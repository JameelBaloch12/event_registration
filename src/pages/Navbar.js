// src/pages/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import UserSideBar from './UserSideBar';

const Navbar = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <UserSideBar />

      {/* Top Navbar */}
      <nav style={navStyle}>
        {/* Logo */}
        <div style={logoStyle}>
          <Link to="/" style={linkStyle}>Eventify</Link>
        </div>

        {/* Navigation Links */}
        <div style={navLinksStyle}>
          <Link to="/events" style={linkStyle}>Events</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
          <Link to="/login" style={linkStyle}>Logout</Link>
        </div>
      </nav>
    </div>
  );
};

const navStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  backgroundColor: '#2563eb',
  color: '#fff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const navLinksStyle = {
  display: 'flex',
  gap: '1.5rem',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: '500',
};

export default Navbar;
