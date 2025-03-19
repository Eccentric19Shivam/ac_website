import React from "react";

function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-700/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Your Trusted AC Service Partner
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Professional AC installation, maintenance, and repair services
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Button size="lg">Our Services</Button>
            <Button size="lg" variant="outline">Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
}