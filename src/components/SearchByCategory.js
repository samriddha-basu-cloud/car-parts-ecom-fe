import React from 'react';
import { FaCog, FaCarBattery, FaBolt, FaTools, FaToolbox } from 'react-icons/fa';

const categories = [
  { name: "Engine Parts", icon: <FaCog /> },
  { name: "Brakes", icon: <FaCarBattery /> },
  { name: "Suspension", icon: <FaBolt /> },
  { name: "Exhaust", icon: <FaTools /> },  // Changed icon here
  { name: "Electrical", icon: <FaToolbox /> }
];

const SearchByCategory = () => {
  return (
    <div className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-darkGray">Search by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map(category => (
          <div 
            key={category.name} 
            className="p-6 bg-paleBlue rounded-lg text-center shadow-md hover:bg-lightBlue transition duration-300 flex flex-col items-center justify-center"
          >
            <div className="text-5xl text-blue mb-4">
              {category.icon}
            </div>
            <span className="text-xl text-blue font-semibold">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchByCategory;
