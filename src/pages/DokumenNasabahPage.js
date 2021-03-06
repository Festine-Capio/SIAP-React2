import React from "react";
import SideBar from "components/SideBar";
import Icon from "assets/images/search.png";
import NavBar2 from "components/NavbarBorrow";
import { Breadcrumb } from "react-bootstrap";
import Dokumen from "components/DokumenNasabahContent";
const DokumenNasabahPage = () => {
  return (
    <div className="row">
      <div className="col">
        <SideBar />
      </div>
      <div className="col-lg-11">
        <div className="container">
          <NavBar2 />
          <div className="row mt-4 ml-1 mb-5">
            <bigcard>
              <div className="section-space32">
                <Dokumen/>
              </div>
            </bigcard>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DokumenNasabahPage;
