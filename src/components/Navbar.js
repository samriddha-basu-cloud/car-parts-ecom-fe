import React from 'react';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5 bg-[#222222] text-[#FFFFFF] relative">
      <div className="text-2xl font-bold">CarParts</div>
      <div className="space-x-6">
        <Link to="/" className="hover:text-[#BBCDE5] transition-colors duration-300">Home</Link>
        <a href="#categories" className="hover:text-[#BBCDE5] transition-colors duration-300">Categories</a>
        <a href="#about" className="hover:text-[#BBCDE5] transition-colors duration-300">About</a>
        <a href="#contact" className="hover:text-[#BBCDE5] transition-colors duration-300">Contact</a>
      </div>
      <div className="flex space-x-4 items-center">
        <div className="flex">
          <input type="text" placeholder="Search..." className="p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#1C5D99]" />
          <button className="bg-[#1C5D99] hover:bg-[#639FAB] focus:outline-none focus:ring-2 focus:ring-[#1C5D99] p-2 rounded-br-md rounded-tr-md text-[#FFFFFF] transition-colors duration-300">Search</button>
        </div>
        <UserMenu />
      </div>
    </nav>
  );
};

export default Navbar;
