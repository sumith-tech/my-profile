import React, { Fragment } from "react";
import Footer from "./Components/Footer";
import Projectpage from "./Components/Projectpage";
import Mainprofile from "./Components/Mainprofile";

const App = () => {
  return (
    <Fragment>
      <Mainprofile />
      <Projectpage /> 
      <Footer />
    </Fragment>
  );
};

export default App;
