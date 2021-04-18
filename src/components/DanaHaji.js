import React from "react";
import { Button } from "react-bootstrap";
import SiapHaji from "assets/images/siap_haji_3x.png";
const DanaHaji = () => {
    return (
      <benefit>
        <div className="section-space80">
          <div className="container">
            <div className="row">
              <div className="col-md-7 mt-5">
                <div className="row d-flex justify-content-center mt-5">
                  <img
                    src={SiapHaji}
                    alt="investasi"
                    style={{ width: "175px", height: "146px" }}
                  />
                </div>
              </div>
              <div className="col mt-5">
                <div className="row mt-3">
                  <h3>SIAP Haji</h3>
                </div>
                <div className="row mt-3">
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    et hendrerit quam. Nunc id volutpat libero. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Sed et
                    hendrerit quam. Nunc id volutpat libero.
                  </p>
                </div>
                <div className="row mt-3">
                  <Button variant="primary" active>
                    Selengkapnya
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </benefit>
    );
};
export default DanaHaji;