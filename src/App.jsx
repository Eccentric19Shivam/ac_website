import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CallButton from './components/CallButton';
import HamburgerMenu from './components/HamburgerMenu';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <HamburgerMenu />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
        <CallButton className="lg:hidden" />
        <WhatsAppButton className="lg:hidden" />
        <Footer />
      </div>
    </Router>
  );
}

export default App;