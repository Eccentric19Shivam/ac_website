import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

function CallButton() {
  return (
    <a
      href="tel:+917414886881"
      className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-xl z-50"
    >
      <FaPhoneAlt className="text-xl" />
      <span className="hidden sm:inline">+91 74148 86881</span>
      <span className="sm:hidden">Call Now</span>
    </a>
  );
}

export default CallButton;