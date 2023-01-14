"use client";

import Header from './Header'
// import Introduction from "./components/Introduction";
import AboutUs from "./AboutUs";
import Services from "./Services";
// import Tuition from "./components/Tuition";
import Curriculum from "./Curriculum";
import ContactUs from "./ContactUs";
import Footer from "./Footer";



export default function LandingPage() {
  return (
    <>
      <Header />
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
