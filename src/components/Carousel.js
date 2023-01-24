import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css"

function Carousel() {
  const sliderContent = [
    {
      src: "https://www.brookings.edu/wp-content/uploads/2021/01/shutterstock_1761753464-e1610404847451.jpg",
      alt: "Image1",
    },
    {
      src: "https://library.ascd.org/m/65a814d4d81d8b7b/webimage-Sachar_7-6-2022-iStock.png",
      alt: "Image2",
    },
    {
      src: "https://img.freepik.com/free-photo/happy-teacher-listening-her-students_1098-2801.jpg?w=2000",
      alt: "Image3",
    },
    {
      src: "https://www.gannett-cdn.com/presto/2021/08/18/NOKL/23b5747f-0be2-44e0-a8c5-296fa9670ef0-3.JPG",
      alt: "Image4",
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    // <section className=" hover:cursor-grab w-full m-auto overflow-hidden  ">
    //   <Slider   {...settings}>
    //     {sliderContent.map((slide, index) => (
    //       <div className="overflow-hidden max-h-[550px] " >
    //         <img className="object-cover overflow-hidden max-h-[550px] block w-full" key={index} src={slide.src} alt={slide.alt} />
    //       </div>
    //     ))}
    //   </Slider >
    // </section >
      <div class="gallery">
        <img src="https://www.gannett-cdn.com/presto/2021/08/18/NOKL/23b5747f-0be2-44e0-a8c5-296fa9670ef0-3.JPG" />
        <img src="https://img.freepik.com/free-photo/happy-teacher-listening-her-students_1098-2801.jpg?w=2000" />
        <img src="https://library.ascd.org/m/65a814d4d81d8b7b/webimage-Sachar_7-6-2022-iStock.png" />
        <img src="https://img.freepik.com/free-photo/back-school-concept-with-various-supplies_23-2149557580.jpg?w=360&t=st=1674514491~exp=1674515091~hmac=c32af341ae239274548a39331ad601044a3765f0d8d547eeffaf3c64eef405fc" />
        <img src="https://img.freepik.com/free-photo/confident-teacher-explaining-lesson-pupils_74855-9751.jpg?w=996&t=st=1674545824~exp=1674546424~hmac=0a8536865a5ed5500cf97b0163b3c3b9d9d224d224ce5382a522506088c51c85" />
        <img src="https://www.brookings.edu/wp-content/uploads/2021/01/shutterstock_1761753464-e1610404847451.jpg" />
        <img src="https://img.freepik.com/free-photo/girl-knowing-best-answer-question_329181-14249.jpg?w=360&t=st=1674514412~exp=1674515012~hmac=3f7bd13c4240c1b3615acfbd4e391fc613bd924e62bc7f315d3c0272d15fd85f" />
        
        <img src="https://img.freepik.com/premium-photo/high-school-students-young-handsome-male-student-peering-through-microscope-science-classroom_19485-3238.jpg?w=360" />
        <img src="https://img.freepik.com/free-photo/learning-physics_1098-17876.jpg?w=360&t=st=1674514677~exp=1674515277~hmac=cb87bb0ae8979c54e2bd54f7b92d2311eb4544945662afed242327e6ed2fea20" />
        <img src="https://img.freepik.com/free-photo/kids-classroom-taking-english-class_23-2149402648.jpg?w=360&t=st=1674514619~exp=1674515219~hmac=c63853666700098f4c97ed24a2e92980e40a90d97dd7b7eaecaa51116b923ba1" />
        <img src="https://img.freepik.com/free-photo/friends-celebrating-graduation_23-2148522243.jpg?w=740&t=st=1674514516~exp=1674515116~hmac=86829eeeaa8671c676512efc774e875f63bc00d98f0b56964e543eef0b4cb971" />
      
      </div>
  );
}

export default Carousel;
