// src/pages/EventContext.js
import React, { createContext, useState, useContext } from 'react';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [registrations, setRegistrations] = useState([]);

  // Function to register a user for an event
  const registerForEvent = (userId, eventId, name, email) => {
    const newRegistration = { userId, eventId, name, email };
    setRegistrations([...registrations, newRegistration]);
  };

  return (
    <EventContext.Provider value={{ registrations, registerForEvent }}>
      {children}
    </EventContext.Provider>
  );
};

// Custom hook to use the EventContext
export const useEventContext = () => useContext(EventContext);
