import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-[#FFFFFF] p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-xl mb-2">CarParts</h3>
          <p>Your one-stop shop for quality car parts.</p>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">Useful Links</h3>
          <ul>
            <li><a href="#home" className="hover:text-[#BBCDE5] transition-colors duration-300">Home</a></li>
            <li><a href="#categories" className="hover:text-[#BBCDE5] transition-colors duration-300">Categories</a></li>
            <li><a href="#about" className="hover:text-[#BBCDE5] transition-colors duration-300">About</a></li>
            <li><a href="#contact" className="hover:text-[#BBCDE5] transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">Contact Us</h3>
          <p>Email: <a href="mailto:info@carparts.com" className="hover:text-[#BBCDE5] transition-colors duration-300">info@carparts.com</a></p>
          <p>Phone: <a href="tel:123-456-7890" className="hover:text-[#BBCDE5] transition-colors duration-300">123-456-7890</a></p>
        </div>
      </div>
      <div className="text-center mt-8 text-[#BBCDE5]">
        &copy; 2024 CarParts | Designed by Your Name
      </div>
    </footer>
  );
};

export default Footer;
