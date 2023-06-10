import React from 'react';
import './Nav.css'

const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <div className="flex items-center">
        <img src="path_to_your_logo_image" alt="Logo" className="h-8 mr-4" />
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Login
        </button>
        <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
          Signup
        </button>
      </div>
    </nav>
  );
};

export default Nav;
