import React from 'react';

const products = [
  {
    id: 1,
    name: 'Inverter Split AC',
    brand: 'CoolMaster',
    price: '$899',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1628765563303-f2f8f9d90a1f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Window AC',
    brand: 'ArcticPro',
    price: '$599',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1631385100922-00124cad7b5f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Portable AC',
    brand: 'ChillTech',
    price: '$449',
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1615870123253-f3de8aa89e24?auto=format&fit=crop&w=800&q=80',
  },
];

function Products() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
              <p className="text-gray-600">{product.brand}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;