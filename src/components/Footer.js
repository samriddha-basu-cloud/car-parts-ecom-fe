import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-[#FFFFFF] py-12 px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-bold text-xl mb-4">CarParts</h3>
          <p>Your one-stop shop for quality car parts.</p>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-4">Useful Links</h3>
          <ul>
            <li><a href="#home" className="hover:text-[#BBCDE5] transition-colors duration-300 block mb-2">Home</a></li>
            <li><a href="#categories" className="hover:text-[#BBCDE5] transition-colors duration-300 block mb-2">Categories</a></li>
            <li><a href="#about" className="hover:text-[#BBCDE5] transition-colors duration-300 block mb-2">About</a></li>
            <li><a href="#contact" className="hover:text-[#BBCDE5] transition-colors duration-300 block mb-2">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-4">Contact Us</h3>
          <p className="flex items-center mb-2">
            <FaEnvelope className="mr-2" /> 
            <a href="mailto:info@carparts.com" className="hover:text-[#BBCDE5] transition-colors duration-300">info@carparts.com</a>
          </p>
          <p className="flex items-center mb-2">
            <FaPhone className="mr-2" /> 
            <a href="tel:123-456-7890" className="hover:text-[#BBCDE5] transition-colors duration-300">123-456-7890</a>
          </p>
          <p className="flex items-center">
            <FaMapMarkerAlt className="mr-2" /> 
            123 CarParts Street, AutoCity, CA
          </p>
        </div>
      </div>
      <div className="text-center mt-12 text-[#BBCDE5]">
        &copy; 2024 CarParts | Designed by Your Name
      </div>
    </footer>
  );
};

export default Footer;
