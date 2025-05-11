import React from 'react';
import '../styles/about.css';
import Navbar from './Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h1>About Eventify</h1>
        <p>
          Eventify is a modern event registration and ticketing system that helps users discover, register,
          and manage events effortlessly. Whether you're an event organizer or an attendee, our platform
          provides tools to streamline your experience.
        </p>
        <h2>Features</h2>
        <ul>
          <li>Admin dashboard to manage events and users</li>
          <li>Easy event registration for attendees</li>
          <li>Real-time updates and ticket confirmations</li>
          <li>Secure login and user authentication</li>
          <li>Beautiful, responsive design</li>
        </ul>
        <p>
          We're committed to making event experiences smooth and memorable for everyone.
        </p>
      </div>
    </>
  );
};

export default About;
