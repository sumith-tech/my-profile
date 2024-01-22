import React from "react";
import HeaderNavbar from "./Components/HeaderNavbar";
import Footer from "./Components/Footer";
import Projectpage from "./Components/Projectpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainprofile from "./Components/Mainprofile";
import Navbar from "./layout/Navbar";

const App = () => {
  return (
    <div>
      {/* <HeaderNavbar /> */}
      <Navbar />
      <Mainprofile />
      <Projectpage />
      <Footer />
    </div>
  );
};

export default App;
