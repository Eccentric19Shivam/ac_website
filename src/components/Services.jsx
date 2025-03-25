import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Wind, 
  Sparkles,
  Box, 
  Cable, 
  TestTube,
  Hammer, 
  Phone,
  Droplets,
  MessageCircle
} from 'lucide-react';

function Services() {
  const services = [
    {
      category: "Installation & Uninstallation",
      icon: <Wrench className="w-6 h-6" />,
      description: "Professional AC installation and removal services",
      items: [
        { name: "Split AC Installation", price: "₹1,199" },
        { name: "Split AC Uninstallation", price: "₹600" },
        { name: "Cassette AC Installation", price: "₹3,000" },
        { name: "Cassette AC Uninstallation", price: "₹1,500" }
      ]
    },
    {
      category: "Gas Services",
      icon: <Wind className="w-6 h-6" />,
      description: "Expert AC gas charging and maintenance",
      items: [
        { name: "Gas Top-up", price: "₹1,900" },
        { name: "Gas Charging", price: "₹3,000" }
      ]
    },
    {
      category: "AC Cleaning & Maintenance",
      icon: <Sparkles className="w-6 h-6" />,
      description: "Comprehensive cleaning solutions for your AC",
      items: [
        { name: "Foam Jet Cleaning (1 AC)", price: "₹700" },
        { name: "Foam Jet Cleaning (2 ACs)", price: "₹1,400" },
        { name: "Foam Jet Cleaning (3 ACs)", price: "₹2,100" },
        { name: "Foam Jet Cleaning (4 ACs)", price: "₹2,800" },
        { name: "Foam Jet Cleaning (5 ACs)", price: "₹3,500" },
        { name: "Jet Spray Cleaning", price: "₹650" },
        { name: "Normal Cleaning", price: "₹500" }
      ]
    },
    {
      category: "Cassette AC Services",
      icon: <Box className="w-6 h-6" />,
      description: "Specialized services for cassette air conditioners",
      items: [
        { name: "Cassette AC Service", price: "₹1,500" }
      ]
    },
    {
      category: "AC Stands",
      icon: <Hammer className="w-6 h-6" />,
      description: "Quality mounting solutions for your AC",
      items: [
        { name: "Split AC Stand", price: "₹699" },
        { name: "Cassette AC Stand", price: "₹1,499" }
      ]
    },
    {
      category: "Drain Pipe",
      icon: <Droplets className="w-6 h-6" />,
      description: "Professional drain pipe installation",
      items: [
        { name: "Drain Pipe (per meter)", price: "₹90" }
      ]
    },
    {
      category: "Power Cable",
      icon: <Cable className="w-6 h-6" />,
      description: "High-quality power cable solutions",
      items: [
        { name: "4 Core 3 Sqm (per meter)", price: "₹165" },
        { name: "4 Core 2.5 Sqm (per meter)", price: "₹155" },
        { name: "3 Core 2.5 Sqm (per meter)", price: "₹140" },
        { name: "2 Core 2.5 Sqm (per meter)", price: "₹105" }
      ]
    },
    {
      category: "Nitrogen Testing",
      icon: <TestTube className="w-6 h-6" />,
      description: "Professional nitrogen testing services",
      items: [
        { name: "N2 Testing for Split AC", price: "₹699" },
        { name: "N2 Testing for Cassette AC", price: "₹1,499" }
      ]
    }
  ];

  const getWhatsAppLink = (service) => {
    const message = encodeURIComponent(`Hi, I'm interested in your ${service} services. Can you provide more information?`);
    return `https://wa.me/919649203996?text=${message}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-20"> {/* Added pt-20 */}
      {/* Title Section */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900">
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert AC solutions for your comfort needs
            </p>
          </motion.div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {service.category}
                    </h3>
                    <p className="text-sm text-gray-500">{service.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {service.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                    >
                      <span className="text-gray-700">{item.name}</span>
                      <span className="font-semibold text-blue-600">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={getWhatsAppLink(service.category)}
                  className="mt-4 w-full flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gray-50 px-6 py-3 rounded-full text-gray-600">
            <p>* All prices are exclusive of 18% GST unless specified otherwise</p>
          </div>
        </motion.div>
      </div>

      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <motion.a
          href="tel:+919649203996"
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 hover:scale-110"
          aria-label="Call us"
          whileHover={{ scale: 1.1 }}
        >
          <Phone className="w-6 h-6" />
        </motion.a>
        <motion.a
          href={getWhatsAppLink("AC")}
          className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300 hover:scale-110"
          aria-label="Chat on WhatsApp"
          whileHover={{ scale: 1.1 }}
        >
          <MessageCircle className="w-6 h-6" />
        </motion.a>
      </div>
    </div>
  );
}

export default Services;