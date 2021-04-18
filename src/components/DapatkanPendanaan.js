import React from "react";
import { Button } from "react-bootstrap";
import Shutterstock from "assets/images/shutterstock-13.png";
const DapatkanPendanaan = () => {
  return (
    <pendanaan>
      <div className="container-fulid">
        <div className="row">
          <div className="col-md-6">
            <img src={Shutterstock} alt="shutter" className="shutter"/>
          </div>
          <div className="col-md-6">
            <div className="section-space112">
              <div className="row justify-content-center">
                <h2>Dapatkan Pendanaan Anda Sekarang Juga!</h2>
              </div>
              <div className="row mt-3 justify-content-center">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et hendrerit quam. Nunc id volutpat libero.
                </p>
              </div>
              <div className="row mt-3">
                <Button variant="primary" active>
                  Daftar Segera
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-5">
          <h5>SIAP dapat diunduh di google play dan app store secara gratis</h5>
        </div>
      </div>
    </pendanaan>
  );
};
export default DapatkanPendanaan;
