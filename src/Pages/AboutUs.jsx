import React from "react";
import AboutBanner from "../Component/AboutUs/AboutBanner";
import AboutDemo from "../Component/AboutUs/AboutDemo";
import Contact from "../Component/ContactUs/Contact";
import Work from "../Component/Work/Work";

const AboutUs = () => {
  return (
    <div>
      <AboutBanner />
      <AboutDemo />
      <Work />
      <Contact />
    </div>
  );
};

export default AboutUs;
