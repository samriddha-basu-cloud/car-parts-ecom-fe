import React from 'react';

const categories = ["Engine Parts", "Brakes", "Suspension", "Exhaust", "Electrical"];

const SearchByCategory = () => {
  return (
    <div className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-darkGray">Search by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map(category => (
          <div 
            key={category} 
            className="p-6 bg-paleBlue rounded-lg text-center shadow-md hover:bg-lightBlue transition duration-300"
          >
            <span className="text-xl text-blue font-semibold">{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchByCategory;
