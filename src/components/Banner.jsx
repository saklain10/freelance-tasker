import React from 'react';
import Slider from 'react-slick';
import { Fade } from "react-awesome-reveal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const images = [
    "https://i.ibb.co/B5dtZp1v/banner.jpg",
    "https://i.ibb.co/Cs4krTCt/minimalist-dark-desktop-wallpaper-1170794-260520.jpg",
    "https://i.ibb.co/Q37VWgnt/photo-1453928582365-b6ad33cbcf64.jpg"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,              
    autoplay: true,
    autoplaySpeed: 2000,     
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true
  };

  return (
    <div className="relative h-[80vh] rounded overflow-hidden lg:mt-3 mt-20">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <div
              className="h-[80vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="grid lg:grid-cols-2 h-full bg-opacity-60 place-items-center text-white px-20">
                <div className='col-span-1'>
                  <Fade direction="up" triggerOnce>
                    <h1 className="text-2xl md:text-5xl font-bold mb-4 lg:w-full w-1/2">
                      The Easiest Way to Handle Your Freelance Task
                    </h1>
                  </Fade>
                  <p className="mb-6 max-w-full lg:block hidden">
                    Work with talented people at the most affordable price to get the most out of your time and cost
                  </p>
                  <div className="gap-2 hidden lg:block">
                    <input type="text" placeholder="Search for..." className="p-2 rounded w-64 border-white text-black" />
                    <button className="px-4 py-2 bg-blue-500 text-white rounded">Search</button>
                  </div>
                </div>
                <div className='col-span-1'></div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
