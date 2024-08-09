import React from 'react';
import { FaDollarSign, FaBoxes, FaCheckCircle } from 'react-icons/fa';

const reasons = [
  { 
    title: "Cost Effective", 
    description: "Aftermarket parts are often significantly cheaper than OEM parts, allowing you to save money without sacrificing the performance or durability of your vehicle." ,
    icon: <FaDollarSign />
  },
  { 
    title: "Wide Selection", 
    description: "Access a vast array of parts for different makes and models. Whether you're looking for common components or rare pieces, the aftermarket industry offers a wide variety to meet your needs.",
    icon: <FaBoxes />
  },
  { 
    title: "Quality Assurance", 
    description: "Our aftermarket parts are rigorously tested to ensure they meet high standards of safety, reliability, and performance. You can trust that our products will keep your vehicle running smoothly." ,
    icon: <FaCheckCircle />
  },
];

const WhyChoose = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-white to-paleBlue p-6">
      <h2 className="text-4xl font-bold mb-8 text-blue text-center">Why Choose Aftermarket Products?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {reasons.map(reason => (
          <div 
            key={reason.title} 
            className="aspect-square bg-white rounded-xl text-center shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center justify-center cursor-pointer hover:bg-blue group p-6"
          >
            <div className="text-5xl mb-4 text-blue transition duration-300 group-hover:text-white group-hover:scale-110">
              {reason.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700 group-hover:text-white transition duration-300">{reason.title}</h3>
            <p className="text-sm text-gray-600 group-hover:text-white transition duration-300">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;