import React, { useState, useEffect } from "react";
import { Carousel, Item } from "react-bootstrap";
import Banner from "assets/images/banner.png";
import { Form, Button, Modal } from "react-bootstrap";
import Mobil from "assets/images/mobil_3x.png";
import Rumah from "assets/images/rumah_3x.png";
const SimulasiPelunasanModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col">
          <h5 className="text-center">Simulasi Pendanaan</h5>
          <p className="text-center">Pilih sesuai keinginan</p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div class="card">
            <div class="card-body">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                />
                <div className="row d-flex justify-content-center">
                  <img src={Mobil} alt="" className="mobil-lunas" />
                </div>
                <p className="text-center">Dana Mobil</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card">
            <div class="card-body">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                />
                <div className="row d-flex justify-content-center">
                  <img src={Rumah} alt="" className="mobil-lunas" />
                </div>
                <p className="text-center">Dana Rumah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SimulasiPelunasanModal;
