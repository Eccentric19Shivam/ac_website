import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Advance Plus Electronics & Services</h3>
            <p className="text-gray-400">
              Your trusted partner for all air conditioning needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-start">
                <FaMapMarkerAlt className="mr-2 text-xl w-6 h-6 mt-1" />
                Shop No. 7, Balaji Market, Near Royal Greens, Sirsi Road, Jaipur (Rajasthan)
              </p>
              <p className="flex items-center">
                <FaPhone className="mr-2 " />
                <a href="tel:+1234567890">123-456-7890</a>
              </p>
              <p className="flex items-start ">
                <FaEnvelope className="mr-2 " />
                <a href="mailto:advanceplus.electronicsservices@gmail.com " className="break-all">
                  advanceplus.electronicsservices@gmail.com
                </a>
              </p>
            </div>
          </div>
          
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Advance Plus Electronics & Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;