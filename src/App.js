import React from "react";
import Footer from "./Components/Footer";
import Projectpage from "./Components/Projectpage";
import Mainprofile from "./Components/Mainprofile";
import Navbar from "./layout/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Mainprofile />
      <Projectpage />
      <Footer />
    </div>
  );
};

export default App;
