import { useState } from "react";
import "./App.css";
import Profile from "./Component/Artist/Profile/ProfileCollection/Profile";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar/Navbar";
import Terms from "./Component/TermsPolicy/Terms";
import Policy from "./Component/TermsPolicy/Policy";
import Artist from "./Pages/Artist";
import ExploreNft from "./Pages/ExploreNft";
import Home from "./Pages/Home";
import About from "./Component/Artist/Profile/ProfileCollection/About";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <div>
      <Navbar />

      {/* <Home /> */}
      {/* <Artist /> */}
      {/* <Profile /> */}
      {/* <ExploreNft /> */}

      {/* <Terms /> */}
      {/* <Policy /> */}
      <AboutUs />

      <Footer />
    </div>
  );
}

export default App;
