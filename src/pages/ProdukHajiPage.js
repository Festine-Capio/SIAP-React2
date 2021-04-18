import React from "react";
import NavBar from "components/NavBar";
import Disclaimer from "components/Disclaimer"
import CarouselComponent from "components/CarouselComponent";
import Foo from "components/FooterContent";
import Benefit from "components/Benefit2"
import SiapHaji from "assets/images/siap_haji_3x.png";
import { Button } from "react-bootstrap";
import Dapatkan from "components/DapatkanPendanaan";
const ProdukHajiPage = () => {
  return (
    <>
      <div className="row">
        <NavBar />
      </div>

      <div className="container mt-5">
        <div className="section-space80">
          <div className="row mt-5">
            <div className="col-md-4 mt-5">
              <div className="row mt-3">
                <h3>SIAP Haji</h3>
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
                  Daftar Segera
                </Button>
              </div>
            </div>
            <div className="col mt-3">
              <div className="row d-flex justify-content-center mt-5">
                <img
                  src={SiapHaji}
                  alt="investasi"
                  style={{ width: "175px", height: "146px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    
        <Benefit/>
     <Dapatkan/>
      <Foo />
    </>
  );
};

export default ProdukHajiPage;
