import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-4">Advance Plus Electronics & Services</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Your trusted partner for all air conditioning needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-200">Services</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors duration-200">Products</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">Contact Info</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0">
                <FaMapMarkerAlt className="w-6 h-6 mb-2 sm:mb-0 sm:mr-2 sm:mt-1" />
                <span className="text-center sm:text-left">Shop No. 7, Balaji Market, Near Royal Greens, Sirsi Road, Jaipur (Rajasthan)</span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-2 sm:space-y-0">
                <FaPhone className="w-6 h-6 mb-2 sm:mb-0 sm:mr-2" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors duration-200">123-456-7890</a>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0">
                <FaEnvelope className="w-6 h-6 mb-2 sm:mb-0 sm:mr-2 sm:mt-1" />
                <a href="mailto:advanceplus.electronicsservices@gmail.com" 
                   className="text-center sm:text-left break-all hover:text-white transition-colors duration-200">
                  advanceplus.electronicsservices@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} Advance Plus Electronics & Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;