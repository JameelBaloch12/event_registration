import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/login.css'; // optional, only if you have styles

const RegisterEvent = () => {
  const { id } = useParams();

  // Check localStorage for user info
  const storedEmail = localStorage.getItem('email');
  const storedName = localStorage.getItem('name');

  const isGuest = !storedEmail || !storedName;
  const name = isGuest ? 'Guest User' : storedName;
  const email = isGuest ? 'anonymous@guest.com' : storedEmail;

  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const generateTicketID = () => {
      return 'TCKT-' + Math.random().toString(36).substring(2, 10).toUpperCase();
    };

    const getFormattedTime = () => {
      const now = new Date();
      const pad = (n) => n.toString().padStart(2, '0');
      return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ` +
             `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    };

    const ticketData = {
      eventId: id,
      name,
      user: email,
      ticketId: generateTicketID(),
      time: getFormattedTime(),
    };

    // Save ticket to localStorage
    const oldTickets = JSON.parse(localStorage.getItem('userTickets')) || [];
    oldTickets.push(ticketData);
    localStorage.setItem('userTickets', JSON.stringify(oldTickets));

    // Notify admin
    const adminNotifications = JSON.parse(localStorage.getItem('adminNotifications')) || [];
    adminNotifications.push(ticketData);
    localStorage.setItem('adminNotifications', JSON.stringify(adminNotifications));

    setTicket(ticketData);
  }, [id, name, email]);

  const handlePrint = () => {
    if (!ticket) return;

    const newWindow = window.open('', '_blank');
    if (!newWindow) {
      alert('Popup blocked! Please allow popups for this site.');
      return;
    }

    const ticketHTML = `
      <html>
        <head>
          <title>Event Ticket</title>
          <style>
            body {
              font-family: 'Poppins', sans-serif;
              background-color: #f0f9ff;
              padding: 2rem;
            }
            .ticket {
              max-width: 600px;
              margin: 0 auto;
              padding: 2rem;
              background-color: white;
              border-radius: 12px;
              box-shadow: 0 6px 16px rgba(0,0,0,0.1);
            }
            h2 {
              text-align: center;
              color: #2563eb;
            }
            p {
              font-size: 16px;
              margin: 0.5rem 0;
            }
          </style>
        </head>
        <body>
          <div class="ticket">
            <h2>🎫 Event Ticket</h2>
            <p><strong>Name:</strong> ${ticket.name}</p>
            <p><strong>Email:</strong> ${ticket.user}</p>
            <p><strong>Event ID:</strong> ${ticket.eventId}</p>
            <p><strong>Registered At:</strong> ${ticket.time}</p>
          </div>
          <script>
            window.onload = function() {
              setTimeout(() => {
                window.print();
              }, 500);
            };
          </script>
        </body>
      </html>
    `;

    newWindow.document.write(ticketHTML);
    newWindow.document.close();
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '4rem auto',
      padding: '2rem',
      backgroundColor: '#f0f9ff',
      borderRadius: '12px',
      boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
      fontFamily: 'Poppins, sans-serif'
    }}>
      <h2 style={{ textAlign: 'center', color: '#2563eb', marginBottom: '2rem' }}>
        🎉 Registration Successful!
      </h2>

      {isGuest && (
        <p style={{ color: '#d97706', fontWeight: 'bold' }}>
          🚨 Guest Mode: This ticket is not linked to a user account.
        </p>
      )}

      {ticket ? (
        <>
          <p><strong>Name:</strong> {ticket.name}</p>
          <p><strong>Email:</strong> {ticket.user}</p>
          <p><strong>Event ID:</strong> {ticket.eventId}</p>
          <p><strong>Registered At:</strong> {ticket.time}</p>

          <button
            onClick={handlePrint}
            style={{
              marginTop: '2rem',
              padding: '10px 20px',
              backgroundColor: '#2563eb',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Open & Print Ticket
          </button>
        </>
      ) : (
        <p>Loading ticket details...</p>
      )}
    </div>
  );
};

export default RegisterEvent;
