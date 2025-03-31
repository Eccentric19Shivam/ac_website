import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';
import { MdOutlinePlace, MdOutlineEmail } from "react-icons/md";

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
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Our <span className="text-blue-600">Store</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-6">
                        Best showroom in Jaipur!
                    </p>
                    
                    {/* Contact Information */}
                    <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
                        <div className="flex items-start gap-2">
                            <MdOutlinePlace className="text-blue-600 text-xl flex-shrink-0 mt-1" />
                            <div className="text-left">
                                <p className="text-slate-600 text-sm">
                                    Shop No 7, Balaji Market, Near Royal Greens,
                                    <br />
                                    Sirsi Road, Jaipur (Raj.)
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                            <MdOutlineEmail className="text-blue-600 text-xl flex-shrink-0" />
                            <a 
                                href="mailto:advanceplus.electronicsservices@gmail.com" 
                                className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                            >
                                advanceplus.electronicsservices@gmail.com
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Call Button */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
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

                {/* Store Images Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {images.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative aspect-square overflow-hidden rounded-xl 
                                shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <img 
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-full object-cover transform transition-transform 
                                    duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 
                                transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>

                {/* Features Section */}
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
                        {[
                            { icon: "⭐", text: "Premium Brands" },
                            { icon: "🛠️", text: "Expert Guidance" },
                            { icon: "💰", text: "Best Prices" }
                        ].map((feature, index) => (
                            <div 
                                key={index}
                                className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 
                                    hover:bg-blue-50 hover:text-blue-600 transition-all duration-300
                                    cursor-pointer transform hover:scale-105"
                            >
                                {feature.icon} {feature.text}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Store;