import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

import LogoColor from "assets/images/logo-color.png";
import LogoOjk from "assets/images/OJK_Logo.png";

const NavBar = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{
          backgroundColor: "#f6fbff",
          position: "fixed",
          color: "#3c3c3c",
          left: "0",
          right: "0",
          zIndex: "1",
        }}
      >
        <Navbar.Brand href="#home">
          <img src={LogoOjk} alt="ojk" className="logo-ojk" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="#">
              <p className="tkb">TKB Total: </p>
            </Nav.Link>
            <Nav.Link href="#">
              <p className="besar">96,66%</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Navbar
        collapseOnSelect
        expand="lg"
        style={{
          backgroundColor: "#ffffff",
          position: "fixed",
          top: "50px",
          left: "0",
          right: "0",
          height: "80px",
          color: "#3c3c3c",
          zIndex: "1",
        }}
      >
        <Navbar.Brand href="#home">
          <img src={LogoColor} alt="Logo" className="icon-color" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="#">Beranda </Nav.Link>
            <Nav.Link eventKey={2} href="#">
              Produk
            </Nav.Link>
            <Nav.Link href="#">Infromasi </Nav.Link>
            <Nav.Link href="#">tentang kami </Nav.Link>
            <Button variant="primary" size="lg" active>
              Masuk
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
