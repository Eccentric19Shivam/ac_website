import React from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';

function Navbar() {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' }
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 shadow-md fixed w-full top-0 z-40 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-4">
              <img 
                src="/logo.png" 
                alt="Company Logo" 
                className="h-24 w-24 object-contain rounded-lg p-1"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl lg:text-3xl font-extrabold text-transparent bg-clip-text text-blue-700 tracking-wider uppercase hidden sm:block hover:scale-105 transition-transform duration-300">
                  Advance Plus Electronics & Services
                </span>
                <span className="text-sm sm:text-base lg:text-lg font-medium text-black-100/80 tracking-wide hidden sm:block">
                  Authorized Sales and Service Dealer
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-black-100/90 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;