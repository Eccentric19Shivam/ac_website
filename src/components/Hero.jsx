import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

function Hero() {
  return (
    <div className="relative bg-blue-600">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">Best Air Conditioners</span>
            <span className="block text-blue-200">For Your Comfort</span>
          </h1>
          <p className="mt-6 max-w-md mx-auto text-xl text-blue-100 sm:text-2xl md:mt-8 md:max-w-3xl">
            Discover our wide range of energy-efficient air conditioners from top brands
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition duration-300 w-full sm:w-auto">
              View Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;