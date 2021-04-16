import React from "react";
import { Card } from "react-bootstrap";
import Mudah from "assets/images/tumbnail-image-syarat.png";
import Online from "assets/images/tumbnail-image-online.png";
import Aman from "assets/images/tumbnail-image-aman.png";
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
                }}
              >
                <Card.Body>
                  <div className="row d-flex justify-content-center mt-3">
                    <img src={Mudah} alt="mudah" />
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    et hendrerit quam. Nunc id volutpat libero. Aliquam erat
                    volutpat. Nunc quis consequat massa.
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
                }}
              >
                <Card.Body>
                  <div className="row d-flex justify-content-center mt-3">
                    <img src={Online} alt="mudah" />
                  </div>

                  <Card.Title
                    style={{
                      textAlign: "center",
                      marginTop: "34px",
                      marginBottom: "17px",
                    }}
                  >
                    100 % Secara Online
                  </Card.Title>

                  <Card.Text
                    style={{
                      textAlign: "justify",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    et hendrerit quam. Nunc id volutpat libero. Aliquam erat
                    volutpat. Nunc quis consequat massa.
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
                }}
              >
                <Card.Body>
                  <div className="row d-flex justify-content-center mt-3">
                    <img src={Aman} alt="mudah" />
                  </div>

                  <Card.Title
                    style={{
                      textAlign: "center",
                      marginTop: "34px",
                      marginBottom: "17px",
                    }}
                  >
                    Aman dan nyaman
                  </Card.Title>

                  <Card.Text
                    style={{
                      textAlign: "justify",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    et hendrerit quam. Nunc id volutpat libero. Aliquam erat
                    volutpat. Nunc quis consequat massa.
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
