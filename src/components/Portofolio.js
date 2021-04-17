import React from "react";
import { Card } from "react-bootstrap";
import Tagihan from "assets/images/tagihan.png";
import Dana from "assets/images/dana-tunai.png";
import Investasi from "assets/images/investasi.png"
const Portofolio = () => {
    return (
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <h1>Portfolio dana SIAP</h1>
        </div>
        <div className="row mt-5 d-flex justify-content-center">
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="row mt-5">
          <div className="col">
            <Card className="card-porto">
              <Card.Body>
                <div className="container">
                  <div className="row d-flex justify-content-center align-items-center">
                    <img
                      src={Tagihan}
                      alt="tagihan"
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                  <div className="row d-flex justify-content-center align-items-center">
                    <h3>Rp. 4,670,056,200</h3>
                  </div>
                  <div className="row d-flex justify-content-center align-items-center">
                    <p className="text-center">Total Pinjaman</p>
                  </div>
                  <div className="row d-flex justify-content-center align-items-center">
                    <p className="text-center">Sejak Berdiri</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card className="card-porto">
              <Card.Body>
                <div className="row d-flex justify-content-center align-items-center">
                  <img
                    src={Dana}
                    alt="tagihan"
                    style={{ width: "83px", height: "83px" }}
                  />
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                  <h3>Rp. 4,670,056,200</h3>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                  <p className="text-center">Total Pendanaan</p>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                  <p className="text-center">Tahun ini</p>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card className="card-porto">
              <Card.Body>
                <div className="row d-flex justify-content-center align-items-center">
                  <img
                    src={Investasi}
                    alt="tagihan"
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                  <h3>Rp. 4,670,056,200</h3>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                  <p className="text-center">Total Pinjaman</p>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                  <p className="text-center">Belum Lunas</p>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col mt-5">
            <div className="row d-flex justify-content-center align-items-center">
              <h2>500</h2>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
              <h3>Peminjam</h3>
            </div>
          </div>
          <div className="col mt-5">
            <div className="row d-flex justify-content-center align-items-center">
              <h2>1000</h2>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
              <h3>Peminjam</h3>
            </div>
          </div>
          <div className="col mt-5">
            <div className="row d-flex justify-content-center align-items-center">
              <h2>500</h2>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
              <h3>Peminjam</h3>
            </div>
          </div>
        </div>
      </div>
    );
};
export default Portofolio;
