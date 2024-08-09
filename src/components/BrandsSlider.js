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
    arrows: false, // Remove the arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-paleBlue to-white py-6">
      <h2 className="text-4xl font-bold mb-8 text-blue text-center">Our Trusted Brands</h2>
      <div className="w-full">
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={brand} 
                alt={`Brand ${index + 1}`} 
                className="h-20 mx-auto transition duration-300"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BrandsSlider;
