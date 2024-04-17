import React, { Fragment } from "react";
import Footer from "./Components/Footer";
import Projectpage from "./Components/Projectpage";
import Mainprofile from "./Components/Mainprofile";
import Navbar from "./layout/Navbar";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Mainprofile />
      <Projectpage />
      <Footer />
    </Fragment>
  );
};

export default App;
