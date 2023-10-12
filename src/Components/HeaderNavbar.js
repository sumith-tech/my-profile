import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import classes from "./HeaderNavbar.module.css";
import { Button } from "@mui/material";
import resume from "../assets/Resume_sumith2200.ss.pdf";

const HeaderNavbar = () => {
  return (
    <Navbar fixed="top" className={classes.navhead}>
      <Container className={classes.navcontainor}>
        <h2 className={classes.nametag}>Sumith</h2>
        <Nav style={{ color: "black" }} className={classes.navLinks}>
          <Nav.Link
            style={{
              color: "#1F4172",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
            href="/"
          >
            About
          </Nav.Link>
          <Nav.Link
            style={{
              color: "#1F4172",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
            href="/project"
          >
            Projects
          </Nav.Link>
          <a href={resume} download="Resume">
            <Button>Download CV</Button>
          </a>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
