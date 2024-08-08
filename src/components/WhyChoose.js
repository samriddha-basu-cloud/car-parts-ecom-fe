import React from 'react';

const reasons = [
  { title: "Cost Effective", description: "Save money on parts without compromising quality." },
  { title: "Wide Selection", description: "Find the exact parts you need from a variety of options." },
  { title: "Quality Assurance", description: "Our products are thoroughly tested for safety and performance." },
];

const WhyChoose = () => {
  return (
    <div className="p-10 bg-[#F8FAFC]">
      <h2 className="text-3xl font-bold mb-8 text-[#222222]">Why Choose Aftermarket Products?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reasons.map(reason => (
          <div key={reason.title} className="p-6 bg-[#FFFFFF] rounded-lg shadow-md hover:bg-[#BBCDE5] transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-[#1C5D99]">{reason.title}</h3>
            <p className="text-[#222222]">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
