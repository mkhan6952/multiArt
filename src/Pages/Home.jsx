import React from "react";
import Contact from "../Component/ContactUs/Contact";
import Faq from "../Component/FAQs/Faq";
import Footer from "../Component/Footer/Footer";
import MindFullness from "../Component/MindFullness/MindFullness";
import UpComing from "../Component/UpComing/UpComing";
import Work from "../Component/Work/Work";

const Home = () => {
  return (
    <div>
      <MindFullness />
      <UpComing />
      <Work />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
