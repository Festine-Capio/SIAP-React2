import React, { useState, useContext } from "react";
import DetailBayar from "components/DetailBayar";
import {
  Accordion,
  Card,
  ListGroup,
  Dropdown,
  Button,
  Badge,
  Modal
} from "react-bootstrap";
import { FaChevronRight, FaArrowLeft } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));




const DokumenNasabahContent = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

  return (
    <>
      <div className="row">
        <div className="col-sm-1">
          <FaArrowLeft className="arrow-left" />
        </div>
        <div className="col">
          <h3>Bayar Tagihan</h3>
        </div>
      </div>
      <div className="row mt-4 ml-1">
        <div className="col">
          <Card className="tbl-bayar">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <div className="row">
                  <div className="col">
                    <p>Nama Produk</p>
                    <h7>SIAP Haji</h7>
                  </div>
                  <div className="col">
                    <p>Nama Nasabah</p>
                    <h7>Hengki Dwiyanto</h7>
                  </div>
                  <div className="col">
                    <p>No. Pengajuan</p>
                    <h7>SH082931</h7>
                  </div>
                  <div className="col">
                    <p>No. Kontak</p>
                    <h7>08297308927392</h7>
                  </div>
                  <div className="col"></div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="row">
                  <div className="col">
                    <h6>Rincian Tagihan</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p>Pembiayaan Ke</p>
                    <h6>1</h6>
                  </div>
                  <div className="col">
                    <p>Keterlambatan</p>
                    <h6>0 Hari</h6>
                  </div>
                  <div className="col">
                    <p>Tenor</p>
                    <h6>36 Bulan</h6>
                  </div>
                  <div className="col">
                    <p>Jatuh Tempo</p>
                    <h6>3 Februari 2021</h6>
                  </div>
                  <div className="col">
                    <p>Tunggakan</p>
                    <h6>Rp. 00,00</h6>
                  </div>
                  <div className="col">
                    <p>Angsuran</p>
                    <h6>Rp. 3,012,000.00</h6>
                  </div>
                  <div className="col">
                    <Button variant="primary" onClick={handleShow}>
                      Bayar
                    </Button>
                  </div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Pembayaran</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <DetailBayar />
            </Modal.Body>
          </Modal>
        </div>
      </div>

      <div className="row mt-5"></div>
    </>
  );
};
export default DokumenNasabahContent;