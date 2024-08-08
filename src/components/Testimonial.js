import React from 'react';

const testimonials = [
  { name: "John Doe", feedback: "Great products, highly recommend!" },
  { name: "Jane Smith", feedback: "Excellent customer service and quality parts." },
  { name: "Sam Wilson", feedback: "Fast shipping and reliable products." }
];

const Testimonial = () => {
  return (
    <div className="p-10 bg-[#F8FAFC]">
      <h2 className="text-3xl font-bold mb-8 text-[#222222]">Customer Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 bg-[#FFFFFF] rounded-lg shadow-md hover:bg-[#BBCDE5] transition duration-300">
            <p className="italic text-[#222222]">"{testimonial.feedback}"</p>
            <h3 className="mt-2 font-semibold text-[#1C5D99]">- {testimonial.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
