// src/pages/Contact.js
import React, { useState } from 'react';
import Navbar from './Navbar'; // Adjust path if Navbar is in a different folder

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Navbar /> {/* Navbar at the top of the page */}
      <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '600px', margin: 'auto' }}>
        <h1>Contact Us</h1>
        <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
          Have questions or feedback? We'd love to hear from you. Please fill out the form below.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            style={textareaStyle}
          ></textarea>
          <button type="submit" style={buttonStyle}>Send Message</button>
        </form>

        {submitted && (
          <p style={{ marginTop: '1rem', color: 'green' }}>
            ✅ Your message has been sent successfully!
          </p>
        )}

        {/* Contact Info Section */}
        <div style={{ marginTop: '3rem' }}>
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> support@eventify.com</p>
          <p><strong>Phone:</strong> +92 300 1234567</p>
          <p><strong>Address:</strong> Main Campus, Near Airport Road, Sukkur IBA University, Sukkur</p>
        </div>
      </div>
    </>
  );
};

const inputStyle = {
  padding: '0.75rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '1rem'
};

const textareaStyle = {
  padding: '0.75rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '1rem'
};

const buttonStyle = {
  backgroundColor: '#2563eb',
  color: '#fff',
  padding: '0.75rem',
  border: 'none',
  borderRadius: '6px',
  fontSize: '1rem',
  cursor: 'pointer'
};

export default Contact;
