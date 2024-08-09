import React from 'react';
import { Tag } from 'lucide-react';

const DiscountBanner = () => {
  return (
    <div className="flex items-center justify-center bg-blue/80 text-white p-6 rounded-full shadow-lg mx-4 md:mx-auto max-w-4xl absolute bottom-8 left-1/3 transform -translate-x-1/2 hover:bg-blue transition-colors duration-300 animate-bounce">
    <Tag className="w-10 h-10 mr-4 transform scale-x-[-1]" />
    <div className="text-center">
        <h2 className="text-2xl font-bold mb-1">Special Discount!</h2>
        <p className="text-sm md:text-base">Get up to 50% off on select car parts. Hurry, offer ends soon!</p>
    </div>
    </div>
  );
};

export default DiscountBanner;