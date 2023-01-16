import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Carousel() {


  const sliderContent = [
    {
      src: 'https://immigrantinvest.com/wp-content/uploads/2021/08/best-school-in-portugal-405191931.jpg',
      alt: 'Image1'
    },
    {
      src: 'https://medicine.exeter.ac.uk/media/universityofexeter/medicalschool/responsiveimages/study/campus/med_sci_lab_1.jpg',
      alt: 'Image2'
    },
    {
      src: 'http://media.wbur.org/wp/2020/09/0414_randolph-high-04-1000x626.jpg',
      alt: 'Image3'
    },
    {
      src: 'https://img.freepik.com/premium-photo/school-classroom-with-chairsdesks-chalkboard_258219-255.jpg?w=826',
      alt: 'Image3'
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