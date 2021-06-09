import React from "react";
import SideBar from "components/SideBar";

import NavBar2 from "components/NavbarBorrow";

import HasilSimulasiContent from "components/HasilSimulasiContent";
import Stepper from "components/StepperDanaRumah";
const HasilSimulasiPage = () => {
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
             
                    <Stepper/>
              
              </div>
            </bigcard>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HasilSimulasiPage;
