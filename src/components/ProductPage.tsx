'use client'; // Marking this file as a client component

import { useState } from 'react';

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState('Medium');
  const [selectedColor, setSelectedColor] = useState('#4F4631'); // Default color
  const [quantity, setQuantity] = useState(1);

  // Handle adding to cart
  const handleAddToCart = () => {
    alert('Product added to cart');
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Image Gallery Section */}
      <div className="flex justify-center space-x-4 mb-6">
        <img
          src="/pic9.png"
          alt="Product Front"
          className="w-32 h-32 object-cover rounded-md cursor-pointer"
        />
        <img
          src="/pic10.png"
          alt="Product Side"
          className="w-32 h-32 object-cover rounded-md cursor-pointer"
        />
        <img
          src="/images/pic11.png"
          alt="Product Back"
          className="w-32 h-32 object-cover rounded-md cursor-pointer"
        />
        <img
          src="/images/product-image-4.jpg"
          alt="Product Detail"
          className="w-32 h-32 object-cover rounded-md cursor-pointer"
        />
      </div>

      {/* Product Info Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">One Life Graphic T-shirt</h1>
        <div className="flex justify-center space-x-6 mt-4">
          <span className="text-3xl font-bold text-gray-900">$260</span>
          <span className="text-3xl font-bold text-gray-400 line-through">$300</span>
          <span className="text-xl font-medium text-red-500">-40%</span>
        </div>
        <p className="text-lg text-gray-600 mt-6">
          This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
        </p>
      </div>

      {/* Color Selection */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">Select Colors</h3>
        <div className="flex space-x-4 mt-3">
          <button
            className="w-10 h-10 rounded-full bg-[#4F4631] focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            onClick={() => setSelectedColor('#4F4631')}
            style={{ backgroundColor: selectedColor === '#4F4631' ? '#6B4F31' : '#4F4631' }}
          />
          <button
            className="w-10 h-10 rounded-full bg-[#314F4A] focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            onClick={() => setSelectedColor('#314F4A')}
            style={{ backgroundColor: selectedColor === '#314F4A' ? '#426F63' : '#314F4A' }}
          />
          <button
            className="w-10 h-10 rounded-full bg-[#31344F] focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            onClick={() => setSelectedColor('#31344F')}
            style={{ backgroundColor: selectedColor === '#31344F' ? '#424F6B' : '#31344F' }}
          />
        </div>
      </div>

      {/* Size Selection */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">Choose Size</h3>
        <div className="flex space-x-4 mt-3">
          <button
            className={`px-4 py-2 border rounded-full ${selectedSize === 'Small' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
            onClick={() => setSelectedSize('Small')}
          >
            Small
          </button>
          <button
            className={`px-4 py-2 border rounded-full ${selectedSize === 'Medium' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
            onClick={() => setSelectedSize('Medium')}
          >
            Medium
          </button>
          <button
            className={`px-4 py-2 border rounded-full ${selectedSize === 'Large' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
            onClick={() => setSelectedSize('Large')}
          >
            Large
          </button>
          <button
            className={`px-4 py-2 border rounded-full ${selectedSize === 'X-Large' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
            onClick={() => setSelectedSize('X-Large')}
          >
            X-Large
          </button>
        </div>
      </div>

      {/* Quantity */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">Quantity</h3>
        <div className="flex items-center mt-3">
          <button
            className="px-4 py-2 bg-gray-200 rounded-l-full"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </button>
          <span className="px-4 py-2">{quantity}</span>
          <button
            className="px-4 py-2 bg-gray-200 rounded-r-full"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="mt-6 flex justify-center space-x-6">
        <button
          className="px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      
        <h1 className="text-2xl font-bold text-gray-800">You might also like</h1>
      </div>
    </div>
  );
};

export default ProductPage;
