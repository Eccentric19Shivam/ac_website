import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
                <img 
                  src="/logo.png" 
                  alt="CoolAir Solutions Logo" 
                  className="h-24 w-24 object-contain"
                />
                <span className="text-2xl font-bold text-blue-600">
                  Advance Plus Electronics & Services
                </span>
              </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600">Products</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center text-gray-600">
              <FaPhone className="mr-2" />
              <span>123-456-7890</span>
            </a>
            <a href="mailto:info@coolair.com" className="flex items-center text-gray-600">
              <FaEnvelope className="mr-2" />
              <span>info@coolair.com</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar