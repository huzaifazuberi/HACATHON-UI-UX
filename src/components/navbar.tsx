import Link from 'next/link';
import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800">
          <Link href="/">SHOP.CO</Link>
        </h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/shop" className="text-gray-600 hover:text-gray-800">Shop</Link>
          <Link href="/on-sale" className="text-gray-600 hover:text-gray-800">On Sale</Link>
          <Link href="/new-arrivals" className="text-gray-600 hover:text-gray-800">New Arrivals</Link>
          <Link href="/brands" className="text-gray-600 hover:text-gray-800">Brands</Link>
        </nav>

        {/* Search Bar */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search for products..."
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
