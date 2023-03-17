import React from "react";
import Contact from "../Component/ContactUs/Contact";
import ExploreTabs from "../Component/ExploreNft/ExoloreTypes/ExploreTabs";
import ExploreBanner from "../Component/ExploreNft/ExploreBanner/ExploreBanner";
import ApplyNow from "../Component/FAQs/ApplyNow";

const ExploreNft = () => {
  return (
    <div>
      <ExploreBanner />
      <ExploreTabs />
      <ApplyNow />
      <Contact />
    </div>
  );
};

export default ExploreNft;
