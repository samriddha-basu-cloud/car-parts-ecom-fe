import React, { useState, useEffect } from 'react';
import { FaCar, FaCalendarAlt, FaWrench } from 'react-icons/fa';
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
      <div className="relative z-10 bg-black/40 p-8 shadow-2xl h-full w-full flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-8 text-paleBlue text-center">Find Your Next Vehicle</h2>
        <form className="flex flex-wrap gap-8">
          <div className="flex-1 min-w-[250px]">
            <label className="block text-paleBlue font-medium mb-2" htmlFor="car-maker">Car Maker</label>
            <div className="relative">
              <FaCar className="absolute top-1/2 transform -translate-y-1/2 left-4 text-[#666666]" />
              <select id="car-maker" className="w-full p-4 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue">
                <option>Select Car Maker</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
          <div className="flex-1 min-w-[250px]">
            <label className="block text-paleBlue font-medium mb-2" htmlFor="model-line">Model Line</label>
            <div className="relative">
              <FaCar className="absolute top-1/2 transform -translate-y-1/2 left-4 text-[#666666]" />
              <select id="model-line" className="w-full p-4 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue">
                <option>Select Model Line</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
          <div className="flex-1 min-w-[250px]">
            <label className="block text-paleBlue font-medium mb-2" htmlFor="year">Year</label>
            <div className="relative">
              <FaCalendarAlt className="absolute top-1/2 transform -translate-y-1/2 left-4 text-[#666666]" />
              <select id="year" className="w-full p-4 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue">
                <option>Select Year</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
          <div className="flex-1 min-w-[250px]">
            <label className="block text-paleBlue font-medium mb-2" htmlFor="modification">Modification</label>
            <div className="relative">
              <FaWrench className="absolute top-1/2 transform -translate-y-1/2 left-4 text-[#666666]" />
              <select id="modification" className="w-full p-4 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue">
                <option>Select Modification</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
          <div className="flex items-end min-w-[250px]">
            <button type="submit" className="w-full bg-blue hover:bg-lightBlue text-white p-4 rounded-md transition-colors duration-300 shadow-md">
              Search
            </button>
          </div>
        </form>
        <DiscountBanner />
      </div>
    </div>
  );
};

export default SearchForm;
