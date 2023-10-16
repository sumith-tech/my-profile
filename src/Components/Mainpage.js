import React, { Fragment } from "react";
import pic from "../assets/abstract-digital-grid-black-background.jpg";
import classes from "./Mainpage.module.css";
const Mainpage = () => {
  return (
    <Fragment>
      <div className={classes.mainpage} >
        <img src={pic}></img>
        <div className={classes.content}>
          <p className={classes.para1}>
            <h4 className={classes.hi}>
              Hi,i'm{" "}
              <span
                style={{
                  fontWeight: "bolder",
                  textDecoration: "underline",
                  textDecorationColor: "grey",
                }}
              >
                Sumith
              </span>
            </h4>
            I'm passionate about creating captivating and responsive web
            experiences. With a strong foundation in front-end development, I
            specialize in harnessing the power of React and various other
            frameworks to bring digital visions to life. Allow me to introduce
            myself and share a bit about my journey in the world of web
            development..
          </p>
          <h3 className={classes.heading1}>My Journey</h3>
          <p className={classes.para2}>
            My journey in web development began with a fascination for the
            ever-evolving digital landscape. Over the years, I have honed my
            skills to become a proficient front-end developer. My primary
            expertise lies in crafting dynamic and interactive user interfaces
            using React, a library I consider to be a game-changer in modern web
            development.
          </p>
          <h3 className={classes.heading2}>Passion and Problem-Solving</h3>
          <p className={classes.para3}>
            What sets me apart as a developer is my unwavering passion for the
            craft. I approach each project with enthusiasm and creativity,
            striving to transform concepts into visually stunning and functional
            web applications. But I don't just stop at aesthetics; I am also a
            problem-solving enthusiast. I thrive on tackling complex challenges
            and finding innovative solutions to overcome them. From optimizing
            performance to resolving compatibility issues, I relish the
            opportunity to make websites more efficient and effective.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Mainpage;
