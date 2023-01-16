"use client";

import Header from './Header'
import AboutUs from "./AboutUs";
import Services from "./Services";
import Curriculum from "./Curriculum";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

import { useState } from 'react';
import ToastSendEmail from './ToastSendEmail';

import Carousel from './Carousel';
import Tuition from './Tuition';

import Up from "../components/Up.js"




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
      <Carousel />
      <AboutUs />
      <Services />
      <Curriculum />

      {showToast && <ToastSendEmail handleCloseToast={handleCloseToast}/> }
      <ContactUs ShowToast={ShowToast} />
      {/* <Introduction />
      
      <Tuition />
      */}

      <Tuition/>
      <ContactUs />
      <Up />

      <Footer /> 
    </>
  );
}
