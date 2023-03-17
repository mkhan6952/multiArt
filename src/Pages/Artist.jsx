import React from "react";
import Banner from "../Component/Artist/Banner/Banner";
import MotorBike from "../Component/Artist/Motorbike/MotorBike";
import Contact from "../Component/ContactUs/Contact";
import ApplyNow from "../Component/FAQs/ApplyNow";

const Artist = () => {
  return (
    <div>
      <Banner />
      <MotorBike />
      <ApplyNow />
      <Contact />
    </div>
  );
};

export default Artist;
