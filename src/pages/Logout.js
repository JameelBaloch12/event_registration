// src/pages/Logout.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear session or token
    localStorage.removeItem('authToken');
    localStorage.removeItem('user'); // remove stored user data

    // Redirect to login
    navigate('/login');
  }, [navigate]);

  return null; // Optional: Replace with spinner or message if needed
};

export default Logout;
