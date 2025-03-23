import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: 'Window AC',
    description: 'Perfect for single rooms and small spaces',
    image: '/ac/window.webp'
  },
  {
    id: 2,
    name: 'Split AC',
    description: 'Energy-efficient cooling for modern homes',
    image: '/ac/split.jpg'
  },
  {
    id: 3,
    name: 'Portable AC',
    description: 'Flexible cooling solution you can move anywhere',
    image: 'ac/portable.webp'
  },
  {
    id: 4,
    name: 'Tower AC',
    description: 'Sleek design with powerful vertical airflow',
    image: 'ac/tower.webp'
  },
  {
    id: 5,
    name: 'Cassette AC',
    description: 'Perfect for commercial spaces with even cooling',
    image: 'ac/cassette.webp'
  },
  {
    id: 6,
    name: 'Ductable AC',
    description: 'Ideal for large spaces and office environments',
    image: 'ac/ductable.webp'
  },
  {
    id: 7,
    name: 'VRF AC System',
    description: 'Advanced climate control for multi-zone applications',
    image: 'ac/vrf.jpg'
  },
  {
    id: 8,
    name: 'Hot & Cold AC',
    description: 'Year-round comfort with heating and cooling',
    image: 'ac/hot_cold.webp'
  }
];

function Products() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Our <span className="text-blue-600">Products</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our range of energy-efficient air conditioning solutions
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
            href="tel:+919876543210"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 
              bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 
              transition-all duration-300 transform hover:scale-105 shadow-lg 
              hover:shadow-red-500/50 text-center group"
          >
            <FaPhone className="group-hover:animate-pulse" />
            <span>Call for Price Quote</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-72 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center z-0 transform 
                  transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${product.image})`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                transition-opacity duration-300 group-hover:opacity-75" />
              
              <div className="relative h-full w-full p-6 flex flex-col justify-end z-10">
                <h3 className="text-2xl font-bold text-white mb-2 transform transition-transform 
                  duration-300 group-hover:-translate-y-2">
                  {product.name}
                </h3>
                <p className="text-gray-300 transform transition-all duration-300 
                  opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                  {product.description}
                </p>
                <a 
                  href="https://wa.me/+919876543210?text=I'm%20interested%20in%20your%20AC%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-white opacity-0 transform 
                    translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all 
                    duration-300"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>Enquire Now</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;