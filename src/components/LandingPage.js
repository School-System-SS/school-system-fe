import React from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Tuition from "./components/Tuition";
import Curriculum from "./components/Curriculum";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Introduction />
      <AboutUs />
      <Services />
      <Tuition />
      <Curriculum />
      <ContactUs />
      <Footer />
    </>
  );
}
