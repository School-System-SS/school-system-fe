"use client";

import Header from './Header'
import AboutUs from "./AboutUs";
import Services from "./Services";
import Curriculum from "./Curriculum";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Carousel from './Carousel';
import Tuition from './Tuition';

import Up from "../components/Up.js"



export default function LandingPage() {
  return (
    <>
      <Header />
      <Carousel />
      <AboutUs />
      <Services />
      <Curriculum />
      <Tuition/>
      <ContactUs />
    
      
     
      {/* <Introduction />
      <Tuition />
      */}
      <Up />
      <Footer /> 
    </>
  );
}
