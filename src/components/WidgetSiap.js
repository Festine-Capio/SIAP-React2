import React, { useState, useEffect } from "react";
import Icon from "assets/images/search.png";
import { Form, Button, Modal } from "react-bootstrap";
import Investasi from "assets/images/investasi2.png";
import Dana from "assets/images/dana_tunai_3x.png";
import Mobil from "assets/images/mobil_3x.png";
import SiapHaji from "assets/images/siap_haji_3x.png";
import SiapRumah from "assets/images/rumah_3x.png";
import Simulasi from "assets/images/product-simulasi@3x.png";
import Tagihan from "assets/images/tagihan@3x.png";
import Lunas from "assets/images/pelunasaan_3x.png";

import Rumah from "assets/images/rumah_3x.png";
import SimulasiPelunasanModal from "components/SimulasiPelunasanModal";
const WidgetSiap = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="row mt-5">
        <div className="col">
          <h5>Widget SIAP</h5>
          <p>Mempermudah anda dalam penghitungan di produk SIAP</p>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col">
          <div
            className="card"
            style={{
              backgroundColor: "#f4f5f7",
              borderRadius: "10px",
              boxShadow: "5px 10px 30px 0 #bdc3e0",
            }}
          >
            <div className="card-body">
              <div className="row">
                <div className="col-md-4" onClick={handleShow}>
                  <div className="row justify-content-center ml-2 mr-2 mt-0">
                    <img
                      src={Simulasi}
                      alt=""
                      style={{
                        width: "74px",
                        height: "74px",
                      }}
                    />
                  </div>
                  <div className="row d-flex justify-content-center ml-2 mr-2 col-sm-9">
                    <span className="font-produk">Simulasi Pendanaan</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row  d-flex justify-content-center ml-2 mr-2 mt-2">
                    <img
                      src={Tagihan}
                      alt=""
                      style={{
                        width: "62px",
                        height: "62px",
                      }}
                    />
                  </div>
                  <div className="row  d-flex justify-content-center ml-3 mr-2 mt-1 col-sm-8">
                    <span className="font-produk">Bayar Tagihan</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row  d-flex justify-content-center ml-2 mr-2">
                    <img
                      src={Lunas}
                      alt=""
                      style={{
                        width: "74px",
                        height: "74px",
                      }}
                    />
                  </div>
                  <div className="row  d-flex justify-content-center ml-3 mr-2 col-sm-9">
                    <span className="font-produk">Simulasi Pelunasan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <div className="row d-flex justify-content-center">
            <div className="col-md-10">
              <SimulasiPelunasanModal />
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-md-10">
              <button
                type="button"
                class="btn btn-primary btn-block"
                onClick={handleClose}
              >
                Selanjutnya
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default WidgetSiap;
