import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images
import bg1 from '../assets/bg1.webp';
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.avif';

console.log('Image Paths:', bg1, bg2, bg3); // Log image paths to debug

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    appendDots: dots => (
      <div className="absolute bottom-4 w-full">
        <ul className="flex justify-center space-x-2 m-0 p-0 list-none"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 bg-white rounded-full inline-block"></div>
    ),
  };

  return (
    <div className="w-full h-screen relative">
      <Slider {...settings}>
        <div className="h-screen">
          <img src={bg1} alt="Background 1" className="h-full w-full object-cover" />
        </div>
        <div className="h-screen">
          <img src={bg2} alt="Background 2" className="h-full w-full object-cover" />
        </div>
        <div className="h-screen">
          <img src={bg3} alt="Background 3" className="h-full w-full object-cover" />
        </div>
      </Slider>
      <style jsx>{`
        .slick-prev:before, .slick-next:before {
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
