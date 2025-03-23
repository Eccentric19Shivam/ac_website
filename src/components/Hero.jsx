import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMoneyBillWave, FaTruck, FaCreditCard, FaTools, FaUserClock, FaAward, FaPhone } from 'react-icons/fa';

function Hero() {
  const words = ["Experience", "Perfect"];
  const subText = "Climate Control";

  return (
    <>
      <div className="relative min-h-[calc(100vh-4rem)] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1585128903994-0b5a5a2f3e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl text-left space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <div className="overflow-hidden">
                {words.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.2,
                      ease: [0.33, 1, 0.68, 1]
                    }}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: "easeOut"
                }}
                className="block text-blue-400 mt-2"
              >
                {subText}
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: "easeOut"
              }}
              className="text-lg sm:text-xl text-gray-200 font-light"
            >
              Professional AC solutions that blend seamlessly with your space, 
              delivering comfort and style in every season.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1,
                ease: "easeOut"
              }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4"
            >
              <Link 
                to="/services"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium 
                  hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 
                  shadow-lg hover:shadow-blue-500/50 text-center"
              >
                Explore Services
              </Link>
              <Link 
                to="/contact"
                className="px-8 py-4 bg-white/10 text-white rounded-lg font-medium 
                  backdrop-blur-sm hover:bg-white/20 transition-all duration-300 
                  transform hover:scale-105 text-center"
              >
                Contact Us
              </Link>
              <a 
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 px-8 py-4 
                  bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 
                  transition-all duration-300 transform hover:scale-105 shadow-lg 
                  hover:shadow-green-500/50 text-center group"
              >
                <FaPhone className="group-hover:animate-pulse" />
                <span>Call Now</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: "easeOut"
              }}
              className="flex flex-wrap gap-4 mt-8"
            >
              {['24/7 Support', 'Expert Installation', 'Smart Solutions'].map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full 
                    text-white text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Why Choose <span className="text-blue-400">Us?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: <FaMoneyBillWave className="w-8 h-8" />,
                title: "Best Prices",
                description: "Competitive pricing with maximum value for your investment"
              },
              {
                icon: <FaTruck className="w-8 h-8" />,
                title: "Express Service",
                description: "Quick response and same-day service availability"
              },
              {
                icon: <FaCreditCard className="w-8 h-8" />,
                title: "Flexible Payment",
                description: "Easy EMI options with no additional cost"
              },
              {
                icon: <FaTools className="w-8 h-8" />,
                title: "Expert Installation",
                description: "Certified technicians for professional setup"
              },
              {
                icon: <FaUserClock className="w-8 h-8" />,
                title: "24/7 Support",
                description: "Round-the-clock customer assistance"
              },
              {
                icon: <FaAward className="w-8 h-8" />,
                title: "Quality Assured",
                description: "100% satisfaction guaranteed on all services"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="flex items-start space-x-4 p-8 rounded-xl bg-gray-800/50 hover:bg-gray-800 
                  transition-all duration-300 transform hover:scale-105 group cursor-pointer 
                  border border-gray-700"
              >
                <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;