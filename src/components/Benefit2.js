import React from "react";
import { Card } from "react-bootstrap";
import Mudah from "assets/images/tumbnail-image-syarat.png";
import Online from "assets/images/tumbnail-image-online.png";
import Aman from "assets/images/tumbnail-image-aman.png";
import Pasti from "assets/images/pelunasaan_3x.png";
import SiapHaji from "assets/images/siap_haji_3x.png";

const Benefit = () => {
  return (
    <benefit>
      <div className="section-space80">
        <div className="container">
          <div className="row justify-content-center">
            <h5>Benefit</h5>
          </div>
          <div className="row justify-content-center">
            <h4>Hanya di SIAP Anda mendapatkan</h4>
          </div>
          <div className="row mt-5">
            <div className="col">
              <Card
                style={{
                  width: "350px",
                  height: "500px",
                  borderRadius: "20px",
                  boxShadow: "0 20px 40px 0 #bedcef",
                }}
              >
                <Card.Body>
                  <div className="row d-flex justify-content-center mt-3">
                    <img
                      src={Mudah}
                      alt="mudah"
                      style={{
                        width: "191px",
                        height: "187px",
                      }}
                    />
                  </div>

                  <Card.Title
                    style={{
                      textAlign: "center",
                      marginTop: "34px",
                      marginBottom: "17px",
                    }}
                  >
                    Mudah
                  </Card.Title>

                  <Card.Text
                    style={{
                      textAlign: "justify",
                    }}
                  >
                    Pembiayaan berbasis syariah dengan proses mudah, cepat, dan
                    aman
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card
                style={{
                  width: "350px",
                  height: "500px",
                  borderRadius: "20px",
                  boxShadow: "0 20px 40px 0 #bedcef",
                }}
              >
                <Card.Body>
                  <div className="row d-flex justify-content-center mt-3">
                    <img
                      src={Pasti}
                      alt="mudah"
                      style={{
                        width: "200px",
                        height: "200px",
                      }}
                    />
                  </div>

                  <Card.Title
                    style={{
                      textAlign: "center",
                      marginTop: "34px",
                      marginBottom: "17px",
                    }}
                  >
                    Pasti
                  </Card.Title>

                  <Card.Text
                    style={{
                      textAlign: "justify",
                    }}
                  >
                    Kepastian mendapat nomor porsi haji
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card
                style={{
                  width: "350px",
                  height: "500px",
                  borderRadius: "20px",
                  boxShadow: "0 20px 40px 0 #bedcef",
                }}
              >
                <Card.Body>
                  <div className="row d-flex justify-content-center">
                    <img
                      src={SiapHaji}
                      alt="investasi"
                      style={{ width: "100px", height: "83px", marginTop:"83px" }}
                    />
                  </div>

                  <Card.Title
                    style={{
                      textAlign: "center",
                      marginTop: "93px",
                      marginBottom: "17px",
                    }}
                  >
                    Berkah
                  </Card.Title>

                  <Card.Text
                    style={{
                      textAlign: "justify",
                    }}
                  >
                    Pembiayaan murni berbasis syariah
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </benefit>
  );
};
export default Benefit;
