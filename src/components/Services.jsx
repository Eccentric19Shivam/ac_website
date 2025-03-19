import React from 'react';
import { FaTools, FaSnowflake, FaCog, FaWrench, FaFan, FaWater } from 'react-icons/fa';

function Services() {
  const services = [
    {
      title: "Super Saver Packages",
      icon: <FaSnowflake className="w-8 h-8 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80",
      features: [
        "Deep indoor cleaning for multiple ACs (2 to 5 units)",
        "Foam-Jet Service with Free Gas Checkup",
        "Suitable for both window & split ACs"
      ]
    },
    {
      title: "AC Servicing",
      icon: <FaTools className="w-8 h-8 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1581093458791-4a2b7b785a23?auto=format&fit=crop&q=80",
      features: [
        "Foam-Jet AC Service – Intensive cleaning with foam & jet spray",
        "Lite AC Service – Indoor unit cleaning with water jet spray"
      ]
    },
    {
      title: "Repair & Gas Refill",
      icon: <FaWrench className="w-8 h-8 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80",
      features: [
        "AC Cooling Issue Repair",
        "AC Gas Leak Repair & Refill",
        "AC Water Leakage Repair",
        "AC Noise/Smell Repair"
      ]
    },
    {
      title: "Installation & Uninstallation",
      icon: <FaFan className="w-8 h-8 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?auto=format&fit=crop&q=80",
      features: [
        "Split AC Installation & Uninstallation",
        "Window AC Installation & Uninstallation",
        "Professional mounting and setup",
        "Safe and secure removal services"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Professional AC Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert solutions for all your AC needs with guaranteed satisfaction 💫
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center z-0 transform transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${service.image})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10" />
              <div className="relative z-20 p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-200 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;