import React from "react";
import { Link } from "react-router-dom";
import Logo from "assets/images/logo.png";

const AccessPage = () => {
    return (
      <div className="col-md-3">
        <div className="row ">
          <div className="bg-login">
            <div className="col d-flex align-items-center justify-content-center flex-column">
              <div className="row">
                <Link to="#">
                  <img src={Logo} alt="Logo" className="siap-icon" />
                </Link>
              </div>
              <div className="row mt-5 justify-content-center">
                <div className="col">
                  <h6 className="text-center">Daftar di SIAP</h6>
                  <h6 className="text-center">dan rasakan</h6>
                  <h6 className="text-center">kemudahannya</h6>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-9 note">
                  <p className="text-center">
                    SIAP dapat diunduh di google play dan app store secara
                    gratis
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="copy">2021 PT. SIAP Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row"></div>
      </div>
    );
};

export default AccessPage;