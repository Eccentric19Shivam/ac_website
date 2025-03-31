import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CallButton from './components/CallButton';
import HamburgerMenu from './components/HamburgerMenu';
import Store from './components/Store';

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col relative">
        <Navbar />
        <HamburgerMenu />
        <Suspense fallback={<LoadingSpinner />}>
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/store" element={<Store />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </Suspense>
        <div className="fixed bottom-4 right-4 space-y-4 z-50">
          <CallButton className="lg:hidden" />
          <WhatsAppButton className="lg:hidden" />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;