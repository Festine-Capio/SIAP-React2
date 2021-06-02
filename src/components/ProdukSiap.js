import React from "react";
import Icon from "assets/images/search.png";
import { Form, Button } from "react-bootstrap";
import Investasi from "assets/images/investasi2.png";
import Dana from "assets/images/dana_tunai_3x.png";
import Mobil from "assets/images/mobil_3x.png";
import SiapHaji from "assets/images/siap_haji_3x.png";
import SiapRumah from "assets/images/rumah_3x.png";
const ProdukSiap = () => {
  return (
    <>
      <div className="row d-flex justify-content-center mt-5">
        <h6>Produk SIAP</h6>
      </div>

      <div className="row d-flex justify-content-center mt-2">
        <div
          className="card"
          style={{
            height: "130px",
            backgroundColor: "#f4f5f7",
            width: "800px",
            boxShadow: "5px 10px 30px 0 #bdc3e0",
          }}
        >
          <div className="card-body">
            <div className="row">
              <div className="col">
                <div className="row d-flex justify-content-center ml-2 mr-2 mt-0">
                  <img
                    src={Investasi}
                    alt=""
                    style={{
                      width: "74px",
                      height: "74px",
                    }}
                  />
                </div>
                <div className="row  d-flex justify-content-center ml-2 mr-2">
                  <span className="font-produk">SIAP Investasi</span>
                </div>
              </div>
              <div className="col">
                <div className="row  d-flex justify-content-center ml-2 mr-2 mt-2">
                  <img
                    src={Dana}
                    alt=""
                    style={{
                      width: "62px",
                      height: "62px",
                    }}
                  />
                </div>
                <div className="row  d-flex justify-content-center ml-2 mr-2 mt-1">
                  <span className="font-produk">SIAP Dana Tunai</span>
                </div>
              </div>
              <div className="col">
                <div className="row  d-flex justify-content-center ml-2 mr-2">
                  <img
                    src={Mobil}
                    alt=""
                    style={{
                      width: "74px",
                      height: "74px",
                    }}
                  />
                </div>
                <div className="row  d-flex justify-content-center ml-2 mr-2">
                  <span className="font-produk">SIAP Dana Mobil</span>
                </div>
              </div>
              <div className="col">
                <div className="row  d-flex justify-content-center ml-2 mr-2 mt-4">
                  <img
                    src={SiapHaji}
                    alt=""
                    style={{
                      width: "37px",
                      height: "31px",
                    }}
                  />
                </div>
                <div className="row d-flex justify-content-center ml-2 mr-2 mt-3">
                  <span className="font-produk"> SIAP Dana Haji</span>
                </div>
              </div>
              <div className="col">
                <div className="row d-flex justify-content-center ml-2 mr-2">
                  <img
                    src={SiapRumah}
                    alt=""
                    style={{
                      width: "74px",
                      height: "74px",
                    }}
                  />
                </div>
                <div className="row d-flex justify-content-center ml-2 mr-2">
                  <span className="font-produk"> SIAP Dana Rumah</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProdukSiap;
