import React from 'react';
import { useParams, Link } from 'react-router-dom';

import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import event3 from '../assets/event3.jpg';
import event4 from '../assets/event4.jpg';
import event5 from '../assets/event5.jpg';

const allEvents = [
  {
    id: 1,
    name: 'Event 1',
    date: '2025-05-10',
    venue: 'Main Auditorium',
    description: 'This is an introductory event to welcome all attendees and share insights about upcoming programs and opportunities.',
    image: event1
  },
  {
    id: 2,
    name: 'Scope of Computer Science in 21st Century',
    date: '2025-06-20',
    venue: 'AB3',
    description: 'Explore the wide range of career opportunities in CS. Learn about AI, Web3, Data Science, and how you can thrive in the tech world.',
    image: event2
  },
  {
    id: 3,
    name: 'Is AI reducing Jobs?',
    date: '2025-07-15',
    venue: 'AB2',
    description: 'This session discusses whether Artificial Intelligence is replacing human jobs or creating new opportunities. Real-world examples included.',
    image: event3
  },
  {
    id: 4,
    name: 'Event 3',
    date: '2025-08-22',
    venue: 'Hall A',
    description: 'A motivational session on skill development and staying relevant in the fast-changing world of tech.',
    image: event4
  },
  {
    id: 5,
    name: 'Event 4',
    date: '2025-09-05',
    venue: 'Conference Room',
    description: 'An expert panel will share tips on networking, resume building, and interview success for tech and non-tech fields.',
    image: event5
  }
];

const EventDetails = () => {
  const { id } = useParams();
  const event = allEvents.find(e => e.id.toString() === id);

  if (!event) {
    return <div style={{ padding: '2rem' }}><h2>Event not found.</h2></div>;
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem' }}>{event.name}</h1>
      <img
        src={event.image}
        alt={event.name}
        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1rem' }}
      />
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Venue:</strong> {event.venue}</p>
      <p style={{ marginTop: '1rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
        {event.description}
      </p>

      <Link to={`/register-event/${event.id}`}>
        <button style={{
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#2563eb',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          fontSize: '1rem',
          cursor: 'pointer'
        }}>
          Register Now
        </button>
      </Link>
    </div>
  );
};

export default EventDetails;
