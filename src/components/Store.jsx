import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';

function Store() {
    const images = [
        { id: 1, url: '/store/1.jpg', alt: 'Store Image 1' },
        { id: 2, url: '/store/2.jpg', alt: 'Store Image 2' },
        { id: 3, url: '/store/3.jpg', alt: 'Store Image 3' },
        { id: 4, url: '/store/4.jpg', alt: 'Store Image 4' },
        { id: 5, url: '/store/5.jpg', alt: 'Store Image 5' },
        { id: 6, url: '/store/6.jpg', alt: 'Store Image 6' },
        { id: 7, url: '/store/7.jpg', alt: 'Store Image 7' },
        { id: 8, url: '/store/8.jpg', alt: 'Store Image 8' },
        { id: 9, url: '/store/9.jpg', alt: 'Store Image 9' },
        { id: 10, url: '/store/10.jpg', alt: 'Store Image 10' },
        { id: 11, url: '/store/11.jpg', alt: 'Store Image 11' },
        { id: 12, url: '/store/12.jpg', alt: 'Store Image 12' },
        { id: 13, url: '/store/13.jpg', alt: 'Store Image 13' },
        { id: 14, url: '/store/14.jpg', alt: 'Store Image 14' },
        { id: 15, url: '/store/15.jpg', alt: 'Store Image 15' },
        { id: 16, url: '/store/16.jpg', alt: 'Store Image 16' },
        { id: 17, url: '/store/17.jpg', alt: 'Store Image 17' },
        { id: 18, url: '/store/18.jpg', alt: 'Store Image 18' }
    ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Store</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Best showroom in Jaipur!
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <a
            href="tel:+919649203996"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 
              bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 
              transition-all duration-300 transform hover:scale-105 shadow-lg 
              hover:shadow-red-500/50 text-center group"
          >
            <FaPhone className="group-hover:animate-pulse" />
            <span>Call +91 9828158686</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-lg 
                hover:shadow-2xl transition-all duration-300"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transform transition-transform 
                  duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${image.url})` }}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 
                transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 
                group-hover:opacity-100 transition-opacity duration-300">
                
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-lg mb-8">
            Visit our store to explore our complete range of air conditioning solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-700">
              ⭐ Premium Brands
            </div>
            <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-700">
              🛠️ Expert Guidance
            </div>
            <div className="px-6 py-3 bg-gray-100 rounded-full text-gray-700">
              💰 Best Prices
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Store;