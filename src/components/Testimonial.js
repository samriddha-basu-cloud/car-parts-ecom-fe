import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  { name: "John Doe", feedback: "Great products, highly recommend!" },
  { name: "Jane Smith", feedback: "Excellent customer service and quality parts." },
  { name: "Sam Wilson", feedback: "Fast shipping and reliable products." }
];

const TestimonialCard = ({ name, feedback }) => (
  <div className="w-full md:w-80 bg-white rounded-lg text-center shadow-lg transition duration-300 flex flex-col items-center justify-center p-8 mx-4 my-6">
    <FaQuoteLeft className="text-4xl text-blue mb-4" />
    <p className="italic text-base text-gray-700 mb-4">
      "{feedback}"
    </p>
    <h3 className="font-semibold text-lg text-gray-900">
      - {name}
    </h3>
  </div>
);

const Testimonial = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-paleBlue to-white py-12">
      <h2 className="text-4xl font-bold mb-12 text-blue text-center">
        Customer's Voice
      </h2>
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            feedback={testimonial.feedback}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
