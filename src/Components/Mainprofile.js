import React, { Fragment } from "react";
import Typewriter from "typewriter-effect";
import classes from "./Mainprofile.module.css";
import pic from "../assets/v1016-b-08.jpg";

const Mainprofile = () => {
  return (
    <Fragment>
      <div className={classes.mainpage} id="home">
        <img src={pic} className={classes.image}></img>
        <div className={classes.aboutproject}>
          <p>
            <h4 className={classes.hi}>
              <Typewriter
                options={{
                  strings: ["Hi...", "i'm Sumith"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
            <h4
              style={{
                paddingBottom: "1em",
                textDecoration: "underline",
                textDecorationColor: "red",
              }}
            >
              Front-End Developer
            </h4>
            I'm passionate about creating captivating and responsive web
            experiences. With a strong foundation in front-end development, I
            specialize in harnessing the power of React and various other
            frameworks to bring digital visions to life. Allow me to introduce
            myself and share a bit about my journey in the world of web
            development.
          </p>
        </div>

        <div className={classes.content}>
          <div className={classes.para1}>
            <h3 className={classes.heading1}>
              <span style={{ fontWeight: 800, color: "red" }}>|</span> My
              Journey
            </h3>
            <p>
              My journey in web development began with a fascination for the
              ever-evolving digital landscape. Over the years, I have honed my
              skills to become a proficient front-end developer. My primary
              expertise lies in crafting dynamic and interactive user interfaces
              using React, a library I consider to be a game-changer in modern
              web development.
            </p>
          </div>
          <div className={classes.para2}>
            {" "}
            <h3 className={classes.heading2}>
              <span style={{ fontWeight: 800, color: "red" }}>|</span> Passion
              and Problem-Solving
            </h3>
            <p>
              What sets me apart as a developer is my unwavering passion for the
              craft. I approach each project with enthusiasm and creativity,
              striving to transform concepts into visually stunning and
              functional web applications. But I don't just stop at aesthetics;
              I am also a problem-solving enthusiast. I thrive on tackling
              complex challenges and finding innovative solutions to overcome
              them. From optimizing performance to resolving compatibility
              issues, I relish the opportunity to make websites more efficient
              and effective.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Mainprofile;
