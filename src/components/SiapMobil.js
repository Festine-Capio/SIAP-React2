import React from "react";
import { Button } from "react-bootstrap";
import Mobil from "assets/images/mobil_3x.png";
const SiapMobil = () => {
  return (
    <div className="container">
      <div className="section-space80">
        <div className="row">
          <div className="col mt-5">
            <div className="row mt-3">
              <h3>SIAP Dana Mobil</h3>
            </div>
            <div className="row mt-3">
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                hendrerit quam. Nunc id volutpat libero. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Sed et hendrerit quam. Nunc
                id volutpat libero.
              </p>
            </div>
            <div className="row mt-3">
              <Button variant="primary" active>
                Selengkapnya
              </Button>
            </div>
          </div>
          <div className="col">
            <div className="row d-flex justify-content-center">
              <img
                src={Mobil}
                alt="dana"
                style={{ width: " 350px", height: " 350px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SiapMobil;
