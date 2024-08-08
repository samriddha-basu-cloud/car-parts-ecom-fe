import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots rounded-full',
    appendDots: (dots) => (
      <div className="bg-[#222222] rounded-full p-2">
        <ul className="m-0">{dots}</ul>
      </div>
    )
  };

  return (
    <div className="w-full h-screen">
      <Slider {...settings}>
        <div
          className="h-screen bg-cover bg-center"
          style={{
            backgroundImage: "url('/path/to/image1.jpg')"
          }}
        ></div>
        <div
          className="h-screen bg-cover bg-center"
          style={{
            backgroundImage: "url('/path/to/image2.jpg')"
          }}
        ></div>
        <div
          className="h-screen bg-cover bg-center"
          style={{
            backgroundImage: "url('/path/to/image3.jpg')"
          }}
        ></div>
      </Slider>
    </div>
  );
};

export default HeroSection;