import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Removed BrowserRouter import
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import LoginSignup from './Pages/LoginSignup';
import CulturalEvents from './Pages/CulturalEvents';
import TechnicalEvents from './Pages/TechnicalEvents';
import AccountCenter from './Pages/AccountCenter';
import Clubs from './Pages/Clubs';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/cultural-events" element={<CulturalEvents />} />
          <Route path="/technical-events" element={<TechnicalEvents />} />
          <Route path="/account" element={<AccountCenter />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
