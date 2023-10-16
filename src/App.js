
import React from "react";
import HeaderNavbar from "./Components/HeaderNavbar";
import Footer from "./Components/Footer";
import Projectpage from "./Components/Projectpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainprofile from "./Components/Mainprofile";



const App = () => {
  return (
    <div>
      <HeaderNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainprofile />}></Route>
          <Route path="/project" element={<Projectpage />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
