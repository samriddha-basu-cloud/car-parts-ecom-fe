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
    <div className="p-10 bg-[#F8FAFC]">
      <h2 className="text-3xl font-bold mb-8 text-[#222222]">Why Choose Aftermarket Products?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reasons.map(reason => (
          <div 
            key={reason.title} 
            className="p-8 bg-[#FFFFFF] rounded-lg shadow-lg hover:bg-[#BBCDE5] transition duration-300 flex flex-col items-center text-center"
          >
            <div className="text-5xl text-[#1C5D99] mb-4">
              {reason.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[#1C5D99]">{reason.title}</h3>
            <p className="text-[#222222]">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
