import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="flex items-center focus:outline-none">
        <FaUser className="text-[#FFFFFF] text-2xl hover:text-[#BBCDE5] transition-colors duration-300" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[#FFFFFF] rounded-md shadow-lg py-2 z-10">
          <Link to="/login" className="block px-4 py-2 text-[#222222] hover:bg-[#BBCDE5] transition-colors duration-300">Login</Link>
          <Link to="/register" className="block px-4 py-2 text-[#222222] hover:bg-[#BBCDE5] transition-colors duration-300">Register</Link>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
