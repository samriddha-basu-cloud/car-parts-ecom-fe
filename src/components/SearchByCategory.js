import React, { useState } from 'react';
import { 
  Cog, 
  Battery, 
  Activity, 
  Wrench, 
  Zap, 
  Droplet,  
  Car, 
  Shield, 
  Fuel, 
  Thermometer, 
  ArrowDown,
  Hammer 
} from 'lucide-react';

const categories = [
  { name: "Engine Parts", icon: <Cog /> },
  { name: "Brakes", icon: <Battery /> },
  { name: "Suspension", icon: <Activity /> },
  { name: "Exhaust", icon: <Wrench /> },
  { name: "Electrical", icon: <Zap /> },
  { name: "Lubricants", icon: <Droplet /> },  
  { name: "Body Parts", icon: <Car /> },
  { name: "Safety & Security", icon: <Shield /> },
  { name: "Fuel System", icon: <Fuel /> },
  { name: "Cooling System", icon: <Thermometer /> },
  { name: "Maintenance Service Parts", icon: <Wrench /> },
  { name: "Air Conditioning", icon: <Thermometer /> },
  { name: "Belts Chains and Rollers", icon: <Cog /> },
  { name: "Bearings", icon: <Shield /> },
  { name: "Control Cables", icon: <Activity /> },
  { name: "Brake System", icon: <Battery /> },
  { name: "Car Accessories", icon: <Car /> },
  { name: "Clutch System", icon: <Wrench /> },
  { name: "Electric Components", icon: <Zap /> },
  { name: "Engine", icon: <Cog /> },
  { name: "Engine Cooling System", icon: <Thermometer /> },
  { name: "Exhaust System", icon: <Wrench /> },
  { name: "Filters", icon: <Droplet /> },
  { name: "Fuel Supply System", icon: <Fuel /> },
  { name: "Gaskets and Sealing Rings", icon: <Shield /> },
  { name: "Ignition and Glowplug System", icon: <Zap /> },
  { name: "Interior and Comfort", icon: <Car /> },
  { name: "Lighting", icon: <Zap /> },
  { name: "Oils and Fluids", icon: <Droplet /> },
  { name: "Pipes and Hoses", icon: <Wrench /> },
  { name: "Repair Kits", icon: <Hammer /> },
  { name: "Sensors Relays and Control Units", icon: <Activity /> },
  { name: "Steering", icon: <Cog /> },
  { name: "Suspension and Arms", icon: <Activity /> },
  { name: "Towbar Parts", icon: <Hammer /> },
  { name: "Transmission", icon: <Cog /> },
  { name: "Tyres and Alloys", icon: <Car /> },
  { name: "Universal", icon: <Hammer /> },
  { name: "Wheels", icon: <Car /> },
  { name: "Windscreen Cleaning System", icon: <Droplet /> }
];

const SearchByCategory = () => {
  const [showMore, setShowMore] = useState(false);
  const visibleCategories = showMore ? categories : categories.slice(0, 5);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-paleBlue to-white p-6">
      <h2 className="text-4xl font-bold mb-8 text-blue text-center">Search by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {visibleCategories.map((category, index) => (
          <div 
            key={index} 
            className="aspect-square bg-white rounded-xl text-center shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center justify-center cursor-pointer hover:bg-blue group"
          >
            <div className="text-5xl mb-4 text-blue transition duration-300 group-hover:text-white group-hover:scale-110">
              {category.icon}
            </div>
            <span className="text-sm font-semibold px-2 text-gray-700 group-hover:text-white transition duration-300">{category.name}</span>
          </div>
        ))}
      </div>
      {categories.length > 5 && (
        <div className="flex justify-center mt-10">
          <button 
            onClick={() => setShowMore(!showMore)} 
            className="bg-blue text-white px-8 py-3 rounded-full flex items-center hover:bg-paleBlue transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-lg font-semibold"
          >
            {showMore ? 'Show Less' : 'Show More'}
            <ArrowDown className={`ml-2 transform transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`} />
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchByCategory;