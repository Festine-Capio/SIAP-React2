import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import Location from "assets/images/icon-location@3x.png";
import Location2 from "assets/images/lokasi-2@3x.png";
const PertanyaanUmum = () => {
    return (
      <>
        <div className="row mt-5 d-flex justify-content-center">
          <h5>Pertanyaan Umum</h5>
        </div>
        <div className=" d-flex justify-content-center mt-2">
          <Accordion defaultActiveKey="0" style={{ width: "500px" }}>
            <Card className="card-accor mb-3">
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <div className="row">
                  <div className="col">Apa aplikasi SIAP? </div>
                  <div className="col d-flex justify-content-end">
                    <FaChevronDown />
                  </div>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="card-accor mb-3">
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <div className="row">
                  <div className="col">Apa saja produk SIAP ?</div>
                  <div className="col d-flex justify-content-end">
                    <FaChevronDown />
                  </div>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="card-accor mb-3">
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <div className="row">
                  <div className="col-md-8">Bagaimana cara mendaftarnya?</div>
                  <div className="col d-flex justify-content-end">
                    <FaChevronDown />
                  </div>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="card-accor mb-3">
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <div className="row">
                  <div className="col">Apa keuntungannya</div>
                  <div className="col d-flex justify-content-end">
                    <FaChevronDown />
                  </div>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
        <div className="row d-flex justify-content-center mt-3">
          <h7>Anda memiiki pertanyaan lagi ?</h7>
        </div>
        <div className="row d-flex justify-content-center mt-3">
          <span>Untuk detailnya bisa hubungi di :</span>
        </div>

        <div className="row d-flex align-items-center justify-content-center mt-5">
          <div className="col-md-3 ">
            <div className="row align-items-center justify-content-center">
              <img
                src={Location}
                alt=""
                style={{
                  width: "102px",
                  height: "102px",
                  alignSelf: "center",
                }}
              />
            </div>
            <div className="row align-items-center justify-content-center">
              <p>(021 - 3244758)</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="row align-items-center justify-content-center">
              <img
                src={Location2}
                alt=""
                style={{
                  width: "102px",
                  height: "102px",
                  alignSelf: "center",
                }}
              />
            </div>
            <div className="row align-items-center justify-content-center">
              <p>Klik untuk ke lokasi</p>
            </div>
          </div>
        </div>
      </>
    );
};
export default PertanyaanUmum;