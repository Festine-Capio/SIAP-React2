import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import OtpInput from "react-otp-input";
import { Button } from "react-bootstrap";
import {
  Card,
  Modal,
} from "react-bootstrap";
import Metode from "components/MetodePembayaran";
const DetailBayar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <p>Nama Produk</p>
          <h7>SIAP Haji</h7>
        </div>
        <div className="col">
          <p>Nama Nasabah</p>
          <h7>Hengki Dwiyanto</h7>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <p>No. Pengajuan</p>
          <h7>SH082931</h7>
        </div>
        <div className="col">
          <p>No. Kontak</p>
          <h7>08297308927392</h7>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h6>Rincian Tagihan</h6>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>Pembiayaan Ke</p>
          <h7>1</h7>
        </div>
        <div className="col">
          <p>Tenor</p>
          <h7>36 Bulan</h7>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>Keterlambatan</p>
          <h7>0 Hari</h7>
        </div>
        <div className="col">
          <p>Jatuh Tempo</p>
          <h7>3 Februari 2021</h7>
        </div>
      </div>

      <div className="row mt-5">
        <Card className="bayar-card">
          <Card.Body>
            <div className="row">
              <div className="col ml-3">
                <div className="row">
                  <span>Total Tagihan</span>
                </div>
                <div className="row">
                  <p>Rp. 3,012,000.00</p>
                </div>
              </div>
              <div className="col mt-2 ml-5">
                <Button variant="primary" onClick={handleShow}>
                  Pilih Pembayaran
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Pembayaran</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Metode/>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};
export default DetailBayar;
