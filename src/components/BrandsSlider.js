import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images
import com1 from '../assets/com1.png';
import com2 from '../assets/com2.png';
import com3 from '../assets/com3.png';
import com4 from '../assets/com4.png';
import com5 from '../assets/com5.png';

const brands = [com1, com2, com3, com4, com5];

const BrandsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="p-10 bg-[#F8FAFC]">
      <h2 className="text-3xl font-bold mb-8 text-[#222222]">Our Trusted Brands</h2>
      <Slider {...settings}>
        {brands.map((brand, index) => (
          <div key={index} className="p-5">
            <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md hover:bg-[#BBCDE5] transition duration-300">
              <img src={brand} alt={`Brand ${index + 1}`} className="h-20 mx-auto" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandsSlider;
