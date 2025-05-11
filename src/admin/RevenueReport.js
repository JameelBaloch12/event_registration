import React, { useEffect, useState } from 'react';

const RevenueReport = () => {
  const [revenueData, setRevenueData] = useState([]);

  useEffect(() => {
    // Simulated revenue data fetching
    const fetchRevenueData = () => {
      const dummyData = [
        { id: 1, eventName: 'Tech Conference 2025', ticketsSold: 120, ticketPrice: 50 },
        { id: 2, eventName: 'Startup Meetup', ticketsSold: 85, ticketPrice: 40 },
        { id: 3, eventName: 'Design Workshop', ticketsSold: 65, ticketPrice: 30 }
      ];
      setRevenueData(dummyData);
    };

    fetchRevenueData();
  }, []);

  const calculateTotalRevenue = () => {
    return revenueData.reduce((total, event) => {
      return total + event.ticketsSold * event.ticketPrice;
    }, 0);
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Revenue Report</h2>
      
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Event Name</th>
            <th style={thStyle}>Tickets Sold</th>
            <th style={thStyle}>Price per Ticket</th>
            <th style={thStyle}>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {revenueData.map(event => (
            <tr key={event.id}>
              <td style={tdStyle}>{event.eventName}</td>
              <td style={tdStyle}>{event.ticketsSold}</td>
              <td style={tdStyle}>${event.ticketPrice}</td>
              <td style={tdStyle}>${event.ticketsSold * event.ticketPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={totalStyle}>
        <strong>Total Revenue: </strong> ${calculateTotalRevenue()}
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  padding: '2rem',
  backgroundColor: '#f9fafb',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
};

const titleStyle = {
  fontSize: '1.5rem',
  marginBottom: '1.5rem',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '1.5rem',
};

const thStyle = {
  textAlign: 'left',
  borderBottom: '2px solid #e5e7eb',
  padding: '0.75rem',
  backgroundColor: '#f1f5f9',
};

const tdStyle = {
  padding: '0.75rem',
  borderBottom: '1px solid #e5e7eb',
};

const totalStyle = {
  fontSize: '1.125rem',
  color: '#10b981',
};

export default RevenueReport;
