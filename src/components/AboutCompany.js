import React from 'react';
import { FaBuilding } from 'react-icons/fa';

const AboutSection = ({ title, content }) => (
  <div className="w-full md:w-80 bg-white rounded-lg text-center shadow-lg transition duration-300 flex flex-col items-center justify-center p-8 mx-4 my-6">
    <FaBuilding className="text-4xl text-blue mb-4" />
    <h3 className="text-2xl font-semibold text-blue mb-4">{title}</h3>
    <p className="text-base text-darkGray">
      {content}
    </p>
  </div>
);

const AboutCompany = () => {
  const sections = [
    {
      title: "Who We Are",
      content: "CarParts is a leading provider of high-quality automotive parts, dedicated to serving car enthusiasts and professionals alike. With years of experience in the industry, we understand the importance of reliable and durable car parts."
    },
    {
      title: "Our Mission",
      content: "Our mission is to provide top-notch automotive parts that ensure safety, performance, and longevity for your vehicle. We strive to offer a wide range of products that meet the highest standards of quality."
    },
    {
      title: "Why Choose Us",
      content: "At CarParts, customer satisfaction is our top priority. We are committed to offering exceptional service, fast shipping, and competitive prices. Whether you're a professional mechanic or a DIY enthusiast, we've got you covered."
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-white to-paleBlue py-12 px-6">
      <h2 className="text-4xl font-bold mb-12 text-blue text-center">
        About Our Company
      </h2>
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto">
        {sections.map((section, index) => (
          <AboutSection
            key={index}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutCompany;