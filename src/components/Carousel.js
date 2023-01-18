import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Carousel() {


  const sliderContent = [
    {
      src: 'https://www.brookings.edu/wp-content/uploads/2021/01/shutterstock_1761753464-e1610404847451.jpg',
      alt: 'Image1'
    },
    {
      src: 'https://library.ascd.org/m/65a814d4d81d8b7b/webimage-Sachar_7-6-2022-iStock.png',
      alt: 'Image2'
    },
    {
      src: 'https://img.freepik.com/free-photo/happy-teacher-listening-her-students_1098-2801.jpg?w=2000',
      alt: 'Image3'
    },
    {
      src: 'https://www.gannett-cdn.com/presto/2021/08/18/NOKL/23b5747f-0be2-44e0-a8c5-296fa9670ef0-3.JPG',
      alt: 'Image4'
    },

  ];
  let settings = {
    arrows: false,
    dots: true,
    margin: 30,
    infinite: true,
    autoplay: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    },
    ]
  };
  return (
    <section className=" hover:cursor-grab w-full m-auto overflow-hidden  ">
      <Slider   {...settings}>
        {sliderContent.map((slide, index) => (
          <div className="overflow-hidden max-h-[550px] " >
            <img className="object-cover overflow-hidden max-h-[550px] block w-full" key={index} src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </Slider >
    </section >

  );

}

export default Carousel;