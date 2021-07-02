import React from "react";
import { Button } from "react-bootstrap";
import SiapWork from "assets/images/siap-works.png";
const ProdukLandingPage = () => {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col product mt-5">
            <h5>Produk</h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row mt-4">
              <h3>Cari tahu bagaimana SIAP bekerja untuk anda</h3>
            </div>
            <div className="row mt-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                hendrerit quam. Nunc id volutpat libero. Aliquam erat volutpat.
                Nunc quis consequat massa. Proin semper elit turpis, non
                scelerisque nulla dictum in. Proin sit amet mauris ac lectus
                semper feugiat nec non odio. Curabitur sollicitudin justo ac
                lorem iaculis, nec pellentesque libero interdum.
              </p>
            </div>
            <div className="row">
              <a href="" className="btn btn-primary">Selengkapnya</a>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src={SiapWork} className="siap-work" alt="siap" />
            </div>
          </div>
        </div>
      </div>
    );
};
export default ProdukLandingPage;