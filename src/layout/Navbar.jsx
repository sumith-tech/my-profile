import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/sumith-high-resolution-logo-transparent (4).png";
const Navbar = () => {
  const [isresponive, setIsresponsive] = useState(false);

  const showNavBar = () => {
    setIsresponsive((pre) => !pre);
  };
  return (
    <header className={classes.header}>
      <img src={logo} className={classes.logo} alt="logo"></img>
      <nav className={isresponive ? "" : classes.responsiveNav}>
        <Link
          to="home"
          onClick={showNavBar}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Home
        </Link>
        <Link
          to="home"
          onClick={showNavBar}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          About me
        </Link>
        <Link
          to="projects"
          onClick={showNavBar}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Project
        </Link>
        <Link
          to="contact"
          onClick={showNavBar}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Contact
        </Link>
        {/* <a onClick={showNavBar} href="./#home">
          Home
        </a>
        <a onClick={showNavBar} href="#aboutme">
          About Me
        </a>
        <a onClick={showNavBar} href="/">
          Skills
        </a>
        <a onClick={showNavBar} href="/#projects">
          My Projects
        </a>
        <a onClick={showNavBar} href="./#contact">
        Contact
        </a> */}
        {/* <button className={classes.resume}>Download CV</button> */}
        <button>
          <FaTimes
            onClick={showNavBar}
            className={`${classes.navbtn} ${classes.closenavbtn}`}
          />
        </button>
      </nav>
      <button>
        <FaBars onClick={showNavBar} className={classes.navbtn} />
      </button>
    </header>
  );
};

export default Navbar;
