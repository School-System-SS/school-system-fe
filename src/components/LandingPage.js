"use client";

import Header from './Header'
// import Introduction from "./components/Introduction";
import AboutUs from "./AboutUs";
import Services from "./Services";
// import Tuition from "./components/Tuition";
import Curriculum from "./Curriculum";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import { useState } from 'react';
import ToastSendEmail from './ToastSendEmail';



export default function LandingPage() {
  const [showToast,setShowToast]=useState(false);
  const handleCloseToast=()=>{
    setShowToast(false)
  }
  const ShowToast=()=>{
    setShowToast(true)

  }
  return (
    <>
      <Header />
      <AboutUs />
      <Services />
      <Curriculum />
      {showToast && <ToastSendEmail handleCloseToast={handleCloseToast}/> }
      <ContactUs ShowToast={ShowToast} />
      {/* <Introduction />
      
      <Tuition />
      */}
      <Footer /> 
    </>
  );
}
