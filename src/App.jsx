import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
