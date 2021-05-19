import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import BgMobil from "assets/images/mobil.PNG";
import Aman from "assets/images/tumbnail-image-aman.png";
import { Accordion, Card, ListGroup, Dropdown, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
const JadwalAngsuranMobilContent = () => {
  
  return (
    <>
      <div className="row">
        <div className="col-sm-1">
          <FaArrowLeft className="arrow-left" />
        </div>
        <div className="col">
          <h3>Jadwal Angsuran</h3>
        </div>
      </div>
      <div className="row mt-4 ml-1 d-flex justify-content-center">
        <h5>Kartu AR</h5>
      </div>
      <div className="row mt-4 ml-1 d-flex justify-content-center">
        <div className="col">
          <div className="row ">
            <div className="col-md-5 ">Nomor Kontrak</div>
            <div className="col-sm-1">:</div>
            <div className="col">10218440100095</div>
          </div>
          <div className="row ">
            <div className="col-md-5 ">Nama debitur</div>
            <div className="col-sm-1">:</div>
            <div className="col">Faisal Gozali</div>
          </div>
          <div className="row ">
            <div className="col-md-5 ">Tanggal Mulai Kontrak</div>
            <div className="col-sm-1">:</div>
            <div className="col">14 November 2019</div>
          </div>
          <div className="row ">
            <div className="col-md-5">Total Hutang</div>
            <div className="col-sm-1">:</div>
            <div className="col">Rp. 71,604,000.00</div>
          </div>
          <div className="row ">
            <div className="col-md-5 ">Sisa Hutang</div>
            <div className="col-sm-1">:</div>
            <div className="col">Rp. 17,901,000.00</div>
          </div>
        </div>
        <div className="col">
          <div className="row ">
            <div className="col-md-5 ">Nama Cabang</div>
            <div className="col-sm-1">:</div>
            <div className="col">JAKARTA 4 (GROUP)</div>
          </div>
          <div className="row ">
            <div className="col-md-5 ">Nomor Polisi</div>
            <div className="col-sm-1">:</div>
            <div className="col">B 1520 UVM</div>
          </div>
          <div className="row ">
            <div className="col-md-5">Tipe Unit</div>
            <div className="col-sm-1">:</div>
            <div className="col"></div>
          </div>
          <div className="row ">
            <div className="col-md-5 ">Sisa Tenor</div>
            <div className="col-sm-1">:</div>
            <div className="col">2 Bulan</div>
          </div>
          <div className="row ">
            <div className="col-md-5 ">Virtual Account No</div>
            <div className="col-sm-1">:</div>
            <div className="col">1021800095</div>
          </div>
        </div>
      </div>
      <div className="row mt-5 ml-1">
        <div className="col">
          <Card style={{ width: "447px" }}>
            <Card.Header>
              <div className="row">
                <div className="col">Angsuran 1</div>
                <div className="col">Belum Ada Pembayaran</div>
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <Accordion>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    style={{
                      backgroundColor: "#ffffff",
                      borderColor: "#ffffff",
                    }}
                  >
                    <div className="row">
                      <div className="col">Tanggal Jatuh Tempo</div>
                      <div className="col">: 14 November 2019</div>

                      <div className="col-sm-1">
                        <div className="row">
                          <FaAngleDown />
                        </div>
                      </div>
                    </div>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <div className="row">
                        <div className="col">Rental</div>
                        <div className="col">: Rp. 1,989,000.00</div>

                        <div className="col-sm-1">
                          <div className="row"></div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">Tanggal Bayar</div>
                        <div className="col">: 25 Desember 2019</div>

                        <div className="col-sm-1">
                          <div className="row"></div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">Jumlah Bayar</div>
                        <div className="col">: Rp. 1,989,000.00</div>

                        <div className="col-sm-1">
                          <div className="row"></div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">Tunggakan Angsuran</div>
                        <div className="col">: Rp. 1,989,000.00</div>

                        <div className="col-sm-1">
                          <div className="row"></div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">Rental</div>
                        <div className="col">: Rp. 1,989,000.00</div>

                        <div className="col-sm-1">
                          <div className="row"></div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">OVD Days</div>
                        <div className="col">: 0</div>

                        <div className="col-sm-1">
                          <div className="row"></div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">Penalty</div>
                        <div className="col">: Rp. 0.00</div>

                        <div className="col-sm-1">
                          <div className="row"></div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">Penalty Paid</div>
                        <div className="col">: Rp. 0.00</div>

                        <div className="col-sm-1">
                          <div className="row"></div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">Collection Fee</div>
                        <div className="col">: Rp. 0.00</div>

                        <div className="col-sm-1">
                          <div className="row"></div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">Collection Fee Paid</div>
                        <div className="col">: Rp. 0.00</div>

                        <div className="col-sm-1">
                          <div className="row"></div>
                        </div>
                      </div>
                     
                      <div className="row">
                        <div className="col">Payment Method</div>
                        <div className="col">: -</div>

                        <div className="col-sm-1">
                          <div className="row"></div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};
export default JadwalAngsuranMobilContent;
