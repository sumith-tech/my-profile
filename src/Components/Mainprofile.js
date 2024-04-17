import React, { Fragment } from "react";
import Typewriter from "typewriter-effect";
import classes from "./Mainprofile.module.css";
import mypic from "../assets/new.jpg";

const Mainprofile = () => {
  return (
    <Fragment>
      <div className={classes.mainpage} id="home">
        <div className={classes.aboutproject}>
          <div className={classes.intro}>
            <span className={classes.hey}>Hey, I'm</span>
            <h1>Sumith</h1>

            <p className={classes.hi}>
              <Typewriter
                options={{
                  strings: [
                    "Front-End Developer",
                    "React Developer",
                    "Web Designer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
          </div>
          <div>
            <img src={mypic} className={classes.myimage} alt="mypic"></img>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Mainprofile;
