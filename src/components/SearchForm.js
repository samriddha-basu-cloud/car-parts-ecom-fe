import React, { useState, useEffect } from 'react';
import { FaCar, FaCalendarAlt, FaWrench } from 'react-icons/fa';
import { ArrowUp } from 'lucide-react';
import bg1 from '../assets/bg1.webp';
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.avif';
import DiscountBanner from './DiscountBanner';

const SearchForm = () => {
  const backgroundImages = [bg1, bg2, bg3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="relative h-screen w-full mx-auto">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})`, opacity: 1 }}
      />
      <div className="relative z-10 bg-black/40 p-8 shadow-2xl h-full w-full flex flex-col justify-center items-center">
        <div className="bg-white/80 rounded-2xl p-8 shadow-lg backdrop-blur-sm max-w-7xl w-full">
          <h2 className="text-4xl font-bold mb-8 text-blue text-center">Find Your Vehicle</h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Car Maker', icon: <FaCar /> },
              { label: 'Model Line', icon: <FaCar /> },
              { label: 'Year', icon: <FaCalendarAlt /> },
              { label: 'Modification', icon: <FaWrench /> }
            ].map(({ label, icon }, index) => (
              <div key={index} className="w-full">
                <label className="block text-gray-700 font-medium mb-2" htmlFor={label.toLowerCase().replace(' ', '-')}>
                  {label}
                </label>
                <div className="relative">
                  <div className="absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-500">
                    {icon}
                  </div>
                  <select
                    id={label.toLowerCase().replace(' ', '-')}
                    className="w-full p-4 pl-12 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue shadow-md hover:bg-gray-50 transition-colors duration-300"
                  >
                    <option>Select {label}</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
            ))}
          </form>
          <div className="mt-8 flex justify-center">
            <button 
              type="submit" 
              className="bg-blue/80 text-white px-8 py-3 rounded-full flex items-center hover:bg-blue transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-lg font-semibold"
            >
              Search
              <ArrowUp className="ml-2 transform rotate-90" />
            </button>
          </div>
        </div>
        <DiscountBanner />
      </div>
    </div>
  );
};

export default SearchForm;