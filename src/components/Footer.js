import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-2xl mb-4">CarParts</h3>
            <p className="text-paleBlue">Your one-stop shop for quality car parts.</p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-bold text-2xl mb-4">Useful Links</h3>
            <ul>
              {['Home', 'Categories', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="hover:text-paleBlue transition-colors duration-300 block mb-2 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-bold text-2xl mb-4">Contact Us</h3>
            {[
              { icon: <FaEnvelope />, content: 'info@carparts.com', href: 'mailto:info@carparts.com' },
              { icon: <FaPhone />, content: '123-456-7890', href: 'tel:123-456-7890' },
              { icon: <FaMapMarkerAlt />, content: '123 CarParts Street, AutoCity, CA' }
            ].map((item, index) => (
              <p key={index} className="flex items-center justify-center md:justify-start mb-2">
                <span className="text-paleBlue mr-2">{item.icon}</span>
                {item.href ? (
                  <a href={item.href} className="hover:text-paleBlue transition-colors duration-300 text-sm">
                    {item.content}
                  </a>
                ) : (
                  <span className="text-sm">{item.content}</span>
                )}
              </p>
            ))}
          </div>
        </div>
        <div className="text-center mt-12 text-paleBlue text-sm">
          &copy; 2024 CarParts | Designed by Your Name
        </div>
      </div>
    </footer>
  );
};

export default Footer;