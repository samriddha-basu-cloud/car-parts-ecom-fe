import React from 'react';
import { FaTag } from 'react-icons/fa';

const DiscountBanner = () => {
  return (
    <div className="flex items-center justify-center bg-[#1C5D99] text-[#FFFFFF] p-6 rounded-lg shadow-md mx-4 md:mx-auto max-w-4xl absolute bottom-24 left-1/2 transform -translate-x-1/2">
      <FaTag className="text-4xl mr-4" />
      <div>
        <h2 className="text-3xl font-bold mb-2">Special Discount!</h2>
        <p className="text-lg">Get up to 50% off on select car parts. Hurry, offer ends soon!</p>
      </div>
    </div>
  );
};

export default DiscountBanner;
