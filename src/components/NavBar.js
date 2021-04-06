import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,

} from "react-bootstrap";
import Button from "@material-ui/core/Button";
import LogoColor from "assets/images/logo-color.png"

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
       }}
     >
       <Navbar.Brand href="#home">[LOGO]</Navbar.Brand>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="mr-auto"></Nav>
         <Nav>
           <Nav.Link href="#">TKB Total: </Nav.Link>
           <Nav.Link href="#">96,66%</Nav.Link>
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
           boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          
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
           </Nav>
         </Navbar.Collapse>
       </Navbar>
     
   </div>
 );
};

export default NavBar;
