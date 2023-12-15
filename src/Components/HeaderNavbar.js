import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import classes from "./HeaderNavbar.module.css";
import { Button } from "@mui/material";
import resume from "../assets/Resume_Sumith_webDev.pdf";

const HeaderNavbar = () => {
  return (
    <Navbar fixed="top" className={classes.navhead}>
      <Container className={classes.navcontainor}>
        <h2 className={classes.nametag}>Sumith</h2>
        <Nav style={{ color: "black" }} className={classes.navLinks}>
          <Nav.Link className={classes.link} href="/">
            About
          </Nav.Link>
          <Nav.Link className={classes.link} href="/project">
            Projects
          </Nav.Link>
          <a href={resume} download="Resume">
            <Button className={classes.btn}>Download CV</Button>
          </a>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
