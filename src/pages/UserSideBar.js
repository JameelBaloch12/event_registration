import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/UserSideBar.css'; // Make sure this CSS file exists

const UserSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'My Events', path: '/events' },
    { name: 'My Tickets', path: '/my-tickets' },
    { name: 'Profile', path: '/profile' },
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
        <h2>User Panel</h2>
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

export default UserSideBar;
