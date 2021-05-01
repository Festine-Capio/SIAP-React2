import React from "react";
import SideBar from "components/SideBar";
import Icon from "assets/images/search.png";
import NavBar2 from "components/NavbarBorrow"; 
import {
 
  Breadcrumb,
} from "react-bootstrap";
import LandingMobilContent from "components/LandingMobilContent";
const LandingPageMobil = () => {
  return (
    <div className="row">
      <div className="col">
        <SideBar />
      </div>
      <div className="col-lg-11">
        <div className="container">
          <NavBar2 />
          <div className="row mt-4 ml-1">
           <LandingMobilContent/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPageMobil;
