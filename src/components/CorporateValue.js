import React from "react";
import { Card } from "react-bootstrap";
import Mudah from "assets/images/tumbnail-image-syarat.png";
import Online from "assets/images/tumbnail-image-online.png";
import Aman from "assets/images/tumbnail-image-aman.png";
const CorporateValue = () => {
  return (
    <benefit>
      <div className="section-space80">
        <div className="container">
          <div className="row justify-content-center">
            <h5>Corporate Value</h5>
          </div>
          <div className="row justify-content-center">
            <h4>Kami berkomitmen untuk</h4>
          </div>
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-md-4">
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
                    <img src={Mudah} alt="mudah" />
                  </div>

                  <Card.Title
                    style={{
                      textAlign: "center",
                      marginTop: "34px",
                      marginBottom: "17px",
                    }}
                  >
                    Transparan
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
            <div className="col-md-4">
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
                    <img src={Aman} alt="mudah" />
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
          </div>
        </div>
      </div>
    </benefit>
  );
};
export default CorporateValue;
