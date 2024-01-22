import React, { useState } from "react";
import Button from "./Button";
import classes from "../Components/HeaderNavbar.module.css";
import resume from "../assets/Resume_sumith_reactDev.pdf";

const Navbar = () => {
  let links = [
    { name: "About me", link: "./#home" },
    { name: "My Projects", link: "./#projects " },
  ];
  const [open, setopen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-teal-200 py-4 md:px-10 px-7">
        <div className={classes.nametag}>Sumith</div>
        <div
          className="text-3xl absolute right-8 cursor-pointer top-6 md:hidden"
          onClick={() => setopen(!open)}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>{" "}
          {/* icon for close and menu */}
        </div>
        <ul
          className={`md:flex items-center md:pb-0 pb-12 absolute
         md:static bg-teal-200 md:z-auto z-[-1] left-0 w-full md:w-auto 
         md:pl-0 pl-9 transition-all duration-500 ease-in ${
           open ? "top-20 opacity-100" : "top-[-490px]" //opens list when mobile view
         } md:opacity-100 `}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500 no-underline"
              >
                {link.name}
              </a>
            </li>
          ))}
          <a href={resume} download="Resume">
            <Button>Download CV</Button>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
