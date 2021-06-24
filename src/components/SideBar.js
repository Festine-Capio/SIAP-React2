import React, { useContext } from "react";
import { ListGroup, Nav, Col, Tab, Row, Dropdown, Button } from "react-bootstrap";
import Logo from "assets/images/siap.png";
import { FaHome } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const SideBar = () => {
  return (
    <Nav
      className="flex-column sidenav"
      style={{
        backgroundColor: "#f0f0f7",
      }}
    >
      <div className="row d-flex justify-content-center mt-5">
        <img src={Logo} alt="logo" className="logosidnav" />
      </div>

      <div className="row ml-1 mt-5">
        <div className="col"></div>
      </div>
      <div className="row ml-1"></div>

      <Nav.Link className="row pl-5">
        <div className="row"></div>
      </Nav.Link>
      <div className="row mt-4 mb-4">
        <ul
          className="list-group list-group-flush"
          style={{ width: "215px", backgroundColor: "#f0f0f7" }}
        >
          <li
            className="list-group-item"
            style={{ backgroundColor: "#f4f5f7" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-2">
                  <FaHome className="icon-side" />
                </div>
                <div className="col">Home</div>
              </div>
            </div>
          </li>
          <li
            className="list-group-item"
            style={{ backgroundColor: "#f4f5f7" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-2">
                  <FaLock className="icon-side" />
                </div>
                <div className="col">Pengajuan</div>
              </div>
            </div>
          </li>
          <li
            className="list-group-item"
            style={{ backgroundColor: "#f4f5f7" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-2">
                  <FaSearch className="icon-side" />
                </div>
                <div className="col">Bantuan</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="row mt-4">
        <button className="btn btn-side" style={{ backgroundColor: "#0c135f", color: "#fff", width: "215px", padding: "13px 13px" }}>
          Daftar jadi lender
        </button>
        
      </div>
      <div className="row d-flex justify-content-center align-items-center" style={{marginTop:"188px"}}>
        <p>Syarat & ketentuan</p>
        <p>Kebijakan Privasi</p>
      </div>
    </Nav>
  );
};

export default SideBar;
