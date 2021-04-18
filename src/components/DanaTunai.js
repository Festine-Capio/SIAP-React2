import React from "react";
import { Button } from "react-bootstrap";
import Dana from "assets/images/dana_tunai_3x.png";
const DanaTunai = () => {
    return (
      <div className="container">
        <div className="section-space80">
          <div className="row">
            <div className="col mt-5">
              <div className="row mt-3">
                <h3>SIAP Dana tunai</h3>
              </div>
              <div className="row mt-3">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et hendrerit quam. Nunc id volutpat libero. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Sed et hendrerit quam.
                  Nunc id volutpat libero.
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
                  src={Dana}
                  alt="dana"
                  style={{ width: "292px", height: "292px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
export default DanaTunai;