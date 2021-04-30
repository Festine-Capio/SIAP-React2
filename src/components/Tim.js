import React from "react";
import { Card, Button} from "react-bootstrap";
import Profile from "assets/images/blank_profile.png";

const Tim = () => {
    return (
      <div className="row">
        <div className="col">
          <div className="row d-flex justify-content-center">
            <p>Struktur Organisasi</p>
          </div>
          <div className="row d-flex justify-content-center">
            <h3>Jajaran tim kami</h3>
          </div>
          <div className="row d-flex justify-content-center mt-5">
            <div className="col">
              <Card
                style={{
                  width: "350px",
                  height: "460px",
                  borderRadius: "20px",
                  boxShadow: "0 20px 40px 0 #bedcef",
                }}
              >
                <Card.Body>
                  <div className="row d-flex justify-content-center">
                    <div className="row d-flex justify-content-center mt-3">
                      <img src={Profile} alt="mudah" className="foto-profile" />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center">
                    <Card.Title
                      style={{
                        textAlign: "center",
                        marginTop: "34px",
                        marginBottom: "17px",
                      }}
                    >
                      Nama
                    </Card.Title>
                  </div>
                  <div className="row d-flex justify-content-center">
                    <Card.Text
                      style={{
                        textAlign: "center",
                      }}
                    >
                      Jabatan
                    </Card.Text>
                  </div>
                  <div className="row">
                    <Button
                      variant="primary"
                      active
                      block
                      style={{
                        marginTop: "75px",
                        marginLeft: "15px",
                        marginRight: "15px",
                      }}
                    >
                      Lihat Profile Linkedin
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card
                style={{
                  width: "350px",
                  height: "460px",
                  borderRadius: "20px",
                  boxShadow: "0 20px 40px 0 #bedcef",
                }}
              >
                <Card.Body>
                  <div className="row d-flex justify-content-center">
                    <div className="row d-flex justify-content-center mt-3">
                      <img src={Profile} alt="mudah" className="foto-profile" />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center">
                    <Card.Title
                      style={{
                        textAlign: "center",
                        marginTop: "34px",
                        marginBottom: "17px",
                      }}
                    >
                      Nama
                    </Card.Title>
                  </div>
                  <div className="row d-flex justify-content-center">
                    <Card.Text
                      style={{
                        textAlign: "center",
                      }}
                    >
                      Jabatan
                    </Card.Text>
                  </div>
                  <div className="row">
                    <Button
                      variant="primary"
                      active
                      block
                      style={{
                        marginTop: "75px",
                        marginLeft: "15px",
                        marginRight: "15px",
                      }}
                    >
                      Lihat Profile Linkedin
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card
                style={{
                  width: "350px",
                  height: "460px",
                  borderRadius: "20px",
                  boxShadow: "0 20px 40px 0 #bedcef",
                }}
              >
                <Card.Body>
                  <div className="row d-flex justify-content-center">
                    <div className="row d-flex justify-content-center mt-3">
                      <img src={Profile} alt="mudah" className="foto-profile" />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center">
                    <Card.Title
                      style={{
                        textAlign: "center",
                        marginTop: "34px",
                        marginBottom: "17px",
                      }}
                    >
                      Nama
                    </Card.Title>
                  </div>
                  <div className="row d-flex justify-content-center">
                    <Card.Text
                      style={{
                        textAlign: "center",
                      }}
                    >
                      Jabatan
                    </Card.Text>
                  </div>
                  <div className="row">
                    <Button
                      variant="primary"
                      active
                      block
                      style={{
                        marginTop: "75px",
                        marginLeft: "15px",
                        marginRight: "15px",
                      }}
                    >
                      Lihat Profile Linkedin
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
};
export default Tim;