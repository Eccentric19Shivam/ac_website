import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { AiFillHome } from 'react-icons/ai';
import { MdMiscellaneousServices } from 'react-icons/md';
import { BsBox, BsShop } from 'react-icons/bs'; 

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      name: 'Home',
      path: '/',
      icon: <AiFillHome className="w-5 h-5" />
    },
    {
      name: 'Services',
      path: '/services',
      icon: <MdMiscellaneousServices className="w-5 h-5" />
    },
    {
      name: 'Products',
      path: '/products',
      icon: <BsBox className="w-5 h-5" />
    },
    {
      name: 'Store',
      path: '/store',
      icon: <BsShop className="w-5 h-5" /> // Updated icon
    }
  ];

  return (
    <div className="lg:hidden fixed top-5 right-5 z-40"> {/* Adjusted positioning and z-index */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2.5 rounded-lg bg-black/50 backdrop-blur-sm 
          hover:bg-black/70 transition-all duration-300 border border-white/10"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <HiX className="w-6 h-6 text-white" />
        ) : (
          <HiMenu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-screen w-full sm:w-[300px] 
          bg-black/90 backdrop-blur-md transform transition-transform 
          duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } shadow-2xl z-50`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-white hover:text-gray-300 transition-colors"
              aria-label="Close menu"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-grow space-y-8 p-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 text-base sm:text-lg 
                  font-medium text-white/90 hover:text-white 
                  transition-colors duration-300 group"
              >
                <span className="group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;