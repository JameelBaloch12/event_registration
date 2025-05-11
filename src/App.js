import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import mainBg from './assets/Mainbg.jpg';

// General Pages
import About from './pages/about';
import Footer from './pages/Footer';
import Contact from './pages/Contact';
import Login from './pages/login';
import Register from './pages/Register';

import RegisterEvent from './pages/RegisterEvent';
import MyTickets from './pages/MyTickets';
import Profile from './pages/Profile';
import Payment from './pages/Payment';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import EventDetails from './pages/EventDetails'; // ✅ Added this line
import Home from './pages/Home';
import Logout from './pages/Logout'; // ✅ Import Logout component

// Admin Pages

import Dashboard from './admin/Dashboard';
import CreateEvent from './admin/CreateEvent';
import EditEvent from './pages/EditEvent';
import Participants from './pages/Participant';
import EventList from './admin/EventList';
import Notifications from './admin/Notification';
import RevenueReport from './admin/RevenueReport';
import AdminUsers from './admin/AdminSideBar';

// Context
import { EventProvider } from './pages/EventContext';

// Language files
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import ur from './locales/ur.json';

const App = () => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  const [content, setContent] = useState(en);

  useEffect(() => {
    switch (language) {
      case 'es': setContent(es); break;
      case 'fr': setContent(fr); break;
      case 'de': setContent(de); break;
      case 'ur': setContent(ur); break;
      default: setContent(en);
    }
  }, [language]);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const backgroundStyle = {
    backgroundImage: `url(${mainBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    width: '100%',
  };

  return (
    <EventProvider>
      <Router>
        <div style={backgroundStyle}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          
            <Route path="/register-event/:id" element={<RegisterEvent />} />
            <Route path="/event-details/:id" element={<EventDetails />} /> {/* ✅ Added this route */}
            <Route path="/my-tickets" element={<MyTickets />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/settings" element={<Settings onLanguageChange={handleLanguageChange} />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/logout" element={<Logout />} />

            {/* Admin Routes */}
            <Route path="/admin-dashboard" element={<Dashboard />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/edit-event/:id" element={<EditEvent />} />
            <Route path="/participants" element={<Participants />} />
            <Route path="/admin-events" element={<EventList />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/revenue-report" element={<RevenueReport />} />
            <Route path="/admin-users" element={<AdminUsers />} />

            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </EventProvider>
  );
};

export default App;
