import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaShieldAlt, 
  FaClock, 
  FaTools, 
  FaUserTie, 
  FaMoneyBillWave, 
  FaCheckCircle,
  FaPhone  // Added FaPhone import
} from 'react-icons/fa';

function Hero() {
  const words = ["Advance Plus Electronics", "& Services"];
  const subText = "Best AC Solutions in Jaipur!";

  const brands = [
    { name: "Carrier", logo: "/brands/carrier_logo.png" },
    { name: "Midea", logo: "/brands/midea_logo.png" },
    { name: "Toshiba", logo: "/brands/toshiba_logo.png" },
    { name: "Daikin", logo: "/brands/daikin_logo.png" },
    { name: "General", logo: "/brands/general_logo.png" },
    { name: "Voltas", logo: "/brands/voltas_logo.png" }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative top-[70px] min-h-[calc(100vh-4rem)] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/hero.jpeg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-transparent" />

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl text-left space-y-8 sm:space-y-10">
            {/* Title */}
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
                className="block text-white mt-4" // Adjusted spacing
              >
                {subText}
              </motion.span>
            </h1>

            {/* Subtitle */}
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

            {/* Buttons */}
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

            {/* Tags */}
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

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why <span className="text-blue-600">Choose Us?</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Experience excellence in AC services with our expert team and customer-first approach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaShieldAlt className="w-8 h-8" />,
                title: "Quality Assured",
                description: "We use only genuine parts and follow industry best practices"
              },
              {
                icon: <FaClock className="w-8 h-8" />,
                title: "24/7 Support",
                description: "Round-the-clock emergency service and support"
              },
              {
                icon: <FaTools className="w-8 h-8" />,
                title: "Expert Technicians",
                description: "Skilled and certified professionals for all AC brands"
              },
              {
                icon: <FaUserTie className="w-8 h-8" />,
                title: "Professional Service",
                description: "Courteous staff and timely service delivery"
              },
              {
                icon: <FaMoneyBillWave className="w-8 h-8" />,
                title: "Competitive Pricing",
                description: "Best-in-class service at reasonable rates"
              },
              {
                icon: <FaCheckCircle className="w-8 h-8" />,
                title: "Satisfaction Guaranteed",
                description: "100% satisfaction with our service quality"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
    </>
  );
}

export default Hero;