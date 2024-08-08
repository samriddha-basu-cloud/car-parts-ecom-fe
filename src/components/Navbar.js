import React from 'react';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5 bg-gradient-to-b from-black to-transparent text-[#FFFFFF] absolute top-0 left-0 w-full z-10">
      <div className="text-2xl font-bold">CarParts</div>
      <div className="space-x-6">
        <Link to="/" className="hover:text-[#BBCDE5] transition-colors duration-300">Home</Link>
        <a href="#categories" className="hover:text-[#BBCDE5] transition-colors duration-300">Categories</a>
        <a href="#about" className="hover:text-[#BBCDE5] transition-colors duration-300">About</a>
        <a href="#contact" className="hover:text-[#BBCDE5] transition-colors duration-300">Contact</a>
      </div>
      <div className="flex space-x-4 items-center">
        <UserMenu />
      </div>
    </nav>
  );
};

export default Navbar;
