import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/AdminSidebar.css'; // make sure the path is correct

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/admin-dashboard' },
    { name: 'Events', path: '/admin-events' },
    { name: 'Create Event', path: '/create-event' },
    { name: 'Users', path: '/admin-users' },
    { name: 'Reports', path: '/reports' },
    { name: 'Settings', path: '/settings' },
    { name: 'Logout', path: '/logout' }

  ];

  return (
    <>
      <div className="hamburger-wrapper">
        <button onClick={() => setIsOpen(!isOpen)} className="hamburger-button">
          <div className="hamburger-bar"></div>
          <div className="hamburger-bar"></div>
          <div className="hamburger-bar"></div>
        </button>
      </div>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2>Admin Panel</h2>
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li key={item.path} className="menu-item">
              <Link
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AdminSidebar;
