import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const brands = ["brand1.jpg", "brand2.jpg", "brand3.jpg", "brand4.jpg", "brand5.jpg"];

const BrandsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="p-10 bg-[#F8FAFC]">
      <h2 className="text-3xl font-bold mb-8 text-[#222222]">Our Trusted Brands</h2>
      <Slider {...settings}>
        {brands.map((brand, index) => (
          <div key={index} className="p-5">
            <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md hover:bg-[#BBCDE5] transition duration-300">
              <img src={brand} alt={`Brand ${index + 1}`} className="h-20 mx-auto"/>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandsSlider;
