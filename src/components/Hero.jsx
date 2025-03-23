import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMoneyBillWave, FaTruck, FaCreditCard, FaTools, FaUserClock, FaAward, FaPhone } from 'react-icons/fa';

function Hero() {
  const words = ["Advance Plus Electronics ", "& Services"];
  const subText = "Best AC Solutions in Jaipur!";

  const brands = [
    {
      name: "Carrier",
      logo: "/brands/carrier-logo.webp"
    },
    {
      name: "Midea",
      logo: "/brands/midea-logo.webp"
    },
    {
      name: "Toshiba",
      logo: "/brands/toshiba-logo.webp"
    },
    {
      name: "Daikin",
      logo: "/brands/daikin-logo.webp"
    },
    {
      name: "General",
      logo: "/brands/general-logo.webp"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[calc(100vh-4rem)] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/hero.jpeg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl text-left space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600 leading-tight">
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
                className="block text-white mt-2"
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

              <a
                href="tel:+919828158686"
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

      {/* Brand Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Our Trusted <span className="text-blue-600">Brands</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-16"
          >
            <a
              href="tel:+919828158686"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 
                            bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 
                            transition-all duration-300 transform hover:scale-105 shadow-lg 
                            hover:shadow-red-500/50 text-center group"
            >
              <FaPhone className="group-hover:animate-pulse" />
              <span>Call +91 9828158686</span>
            </a>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative w-full max-w-[300px] aspect-[3/2] bg-white rounded-xl 
                  p-10 hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="w-full h-full object-contain filter grayscale hover:grayscale-0 
                    transition-all duration-300 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-16">
            Why Choose <span className="text-blue-600">Us?</span>
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-16"
          >
            <a
              href="tel:+919828158686"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 
                        bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 
                        transition-all duration-300 transform hover:scale-105 shadow-lg 
                        hover:shadow-red-500/50 text-center group"
            >
              <FaPhone className="group-hover:animate-pulse" />
              <span>Call +91 9828158686</span>
            </a>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: <FaMoneyBillWave className="w-10 h-10" />,
                title: "Best Prices",
                description: "Competitive pricing with maximum value for your investment"
              },
              {
                icon: <FaTruck className="w-10 h-10" />,
                title: "Express Service",
                description: "Quick response and same-day service availability"
              },
              {
                icon: <FaCreditCard className="w-10 h-10" />,
                title: "Flexible Payment",
                description: "Easy EMI options with no additional cost"
              },
              {
                icon: <FaTools className="w-10 h-10" />,
                title: "Expert Installation",
                description: "Certified technicians for professional setup"
              },
              {
                icon: <FaUserClock className="w-10 h-10" />,
                title: "24/7 Support",
                description: "Round-the-clock customer assistance"
              },
              {
                icon: <FaAward className="w-10 h-10" />,
                title: "Quality Assured",
                description: "100% satisfaction guaranteed on all services"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="flex items-start space-x-5 p-8 rounded-xl bg-white hover:bg-gray-50 
                  transition-all duration-300 transform hover:scale-105 group cursor-pointer 
                  border border-gray-100 shadow-lg hover:shadow-xl"
              >
                <div className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
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