// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import React from "react";
import HeaderNavbar from "./Components/HeaderNavbar";
import Footer from "./Components/Footer";
import Projectpage from "./Components/Projectpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainprofile from "./Components/Mainprofile";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP1cngQXA1_e5fAcOKCP5V9__DO-Qgn74",
  authDomain: "sumith-3a974.firebaseapp.com",
  projectId: "sumith-3a974",
  storageBucket: "sumith-3a974.appspot.com",
  messagingSenderId: "1091524650501",
  appId: "1:1091524650501:web:add3bfce63ed2b89d75e6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
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
