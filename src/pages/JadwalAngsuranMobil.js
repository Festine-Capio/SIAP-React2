import React from "react";
import SideBar from "components/SideBar";
import Icon from "assets/images/search.png";
import NavBar2 from "components/NavbarBorrow";
import { Breadcrumb } from "react-bootstrap";
import JadwalAngsuranMobilContent from "components/JadwalAngsuranMobilContent";
const JadwalAngsuranMobil = () => {
  return (
    <div className="row">
      <div className="col">
        <SideBar />
      </div>
      <div className="col-lg-11">
        <div className="container">
          <NavBar2 />
          <div className="row mt-4 ml-1 mb-5">
            <bigcard2>
              <div className="section-space32">
                <JadwalAngsuranMobilContent />
              </div>
            </bigcard2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JadwalAngsuranMobil;
