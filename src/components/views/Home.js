import React from "react";
import Contact from "../main/home/Contact";
import ExceptionalDental from "../main/home/ExceptionalDental";
import FeatureBox from "../main/home/FeatureBox";
import Hero from "../main/home/Hero";
import MakeAnAppointment from "../main/home/MakeAnAppointment";
import OurServices from "../main/home/OurServices";
import Testimonial from "../main/home/Testimonial";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <FeatureBox />
        <OurServices />
        <ExceptionalDental />
        <MakeAnAppointment />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
