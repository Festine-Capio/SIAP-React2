import React from "react";
import { Button } from "react-bootstrap";
import Investasi from "assets/images/investasi_3x.png"
const SiapInvestasi = () => {
    return (
      <benefit>
        <div className="section-space80">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="row d-flex justify-content-center">
                  <img
                    src={Investasi}
                    alt="investasi"
                    style={{ width: "350px", height: "350px" }}
                  />
                </div>
              </div>
              <div className="col mt-5">
                <div className="row mt-3">
                  <h3>SIAP Investasi</h3>
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
export default SiapInvestasi;