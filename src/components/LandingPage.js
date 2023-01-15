"use client";

import Header from './Header'
// import Introduction from "./components/Introduction";
import AboutUs from "./AboutUs";
import Services from "./Services";
// import Tuition from "./components/Tuition";
import Curriculum from "./Curriculum";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Carousel from './Carousel';




export default function LandingPage() {
  return (
    <>
      <Header />
      <Carousel/>
      <AboutUs />
      <Services />
      <Curriculum />
      <ContactUs />
      {/* <Introduction />
      
      <Tuition />
      */}
      <Footer /> 
    </>
  );
}
