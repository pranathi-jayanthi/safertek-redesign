import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/assets/safertekLogo.png" alt="SaferTek Logo" className="h-10 mr-2" />
          <span className="text-xl font-semibold text-blue-800">Realize. Optimize. Maximize.</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-800 hover:text-indigo-600">Home</Link>
          <Link to="/" className="text-gray-800 hover:text-indigo-600">About</Link>
          <Link to="/contact" className="text-gray-800 hover:text-indigo-600">Contact</Link>
        </nav>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link to="/" className="block py-2 px-4 text-sm hover:bg-gray-200">Home</Link>
          <Link to="/about" className="block py-2 px-4 text-sm hover:bg-gray-200">About</Link>
          <Link to="/services" className="block py-2 px-4 text-sm hover:bg-gray-200">Services</Link>
          <Link to="/contact" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;