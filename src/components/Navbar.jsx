import React from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';

function Navbar() {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Our Store', path: '/store' }
  ];

  return (
    <nav className="bg-black fixed w-full top-0 z-40 border-b border-slate-200">
      <div className="max-w-7xl mx-auto h-[80px]  lg:px-8">
        <div className="flex justify-between gap-1 items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-4">
              <img 
                src="/logo.png" 
                alt="Company Logo" 
                className="h-16 w-16 object-contain rounded-lg p-1 shadow-sm hidden sm:block"
              />
              <div className="flex flex-col space-y-1">
                <span className="text-lg sm:text-xl lg:text-2xl font-extrabold bg-gradient-to-r from-white to-white bg-clip-text text-transparent tracking-wider uppercase block hover:scale-105 transition-transform duration-300">
                  {/* Show shorter text on mobile */}
                  <span className="sm:hidden">Advance Plus Electronics & Services</span>
                  <span className="hidden sm:block">Advance Plus Electronics & Services</span>
                </span>
                <span className="text-sm sm:text-base lg:text-lg font-medium text-white tracking-wide block">
                  <span className="sm:hidden">Authorized Sales and Service Dealer</span>
                  <span className="hidden sm:block">Authorized Sales and Service Dealer</span>
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
                className="text-white hover:text-slate-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;