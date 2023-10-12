import React, { Fragment } from "react";
import classes from "./Projectpage.module.css";

const Projectpage = () => {
  return (
    <Fragment>
      <div className={classes.mainpage}>
        <div className={classes.aboutproject}>
          <p>
            <h4 className={classes.hi}>Project Portfolio</h4> Welcome to my
            project portfolio! Here, you can explore some of the exciting
            applications I've created, showcasing a wide range of
            functionalities and skills. From mailbox clients to expense
            trackers, e-commerce websites to restaurant apps, I've developed a
            diverse set of projects to meet the needs of different users. Below,
            you'll find a brief description of each project:
          </p>
        </div>

        <div className={classes.content}>
          <div className={classes.para1}>
            <h3 className={classes.heading1}>
              <span style={{ fontWeight: 800,color: "red" }}>|</span> Mailbox Client App
            </h3>
            <p>
              This mailbox client app is designed to help users manage their
              emails effectively. With this app, users can send and receive
              emails with ease. It provides a user-friendly interface for
              handling emails and leverages the power of Firebase as its
              database, ensuring secure and reliable data storage. Whether for
              personal or professional use, this mailbox client simplifies your
              email experience.
            </p>
          </div>
          <div className={classes.para2}>
            {" "}
            <h3 className={classes.heading2}>
              <span style={{ fontWeight: 800,color: "red" }}>|</span> E-Commerce Website
            </h3>
            <p>
              Shopping online has become an integral part of our lives, and I've
              developed an e-commerce website that enables users to browse,
              select, and purchase products with convenience. This website
              features a user-friendly interface, secure payment options, and
              product management. Users can add items to their cart, complete
              purchases, and even review their order history. It demonstrates my
              web development expertise in creating a seamless shopping
              experience.
            </p>
          </div>
          <div>
            {" "}
            <h3 className={classes.heading3}>
              <span style={{ fontWeight: 800,color: "red" }}>|</span> Restaurant App
            </h3>
            <p className={classes.para3}>
              The restaurant app I created caters to the evolving needs of
              diners. Users can conveniently order their favorite dishes online,
              customize orders, and choose between delivery or pickup. This app
              streamlines the dining experience, allowing restaurants to provide
              quick and efficient service. My skills in app development and
              integration shine through in this project.
            </p>
          </div>
        </div>
        <div>
          <h2 style={{textAlign:'center'}}>Thank you for visiting my Portfolio!</h2>
        </div>
      </div>
    </Fragment>
  );
};

export default Projectpage;
