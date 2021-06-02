import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import OtpInput from "react-otp-input";
import { Button } from "react-bootstrap";
import { Card, Modal } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import DetailBayar from "components/DetailBayar";
import Spin from "assets/images/logospin@3x.png";
import Pilih from "components/PilihPembayaran";
const MetodePembayaran = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <span>Nama Nasabah</span>
          <p>Hengki Dwiyanto</p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <span>No. Pengajuan</span>
          <p>SH082931</p>
        </div>
        <div className="col">
          <span>No. Kontak</span>
          <p>08297308927392</p>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col">
          <h6>Rincian Tagihan</h6>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col">
          <span>Pembiayaan Ke</span>
          <p>1</p>
        </div>
        <div className="col">
          <span>Tenor</span>
          <p>36 Bulan</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <span>Keterlambatan</span>
          <p>0 Hari</p>
        </div>
        <div className="col">
          <span>Jatuh Tempo</span>
          <p>3 Februari 2021</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <span>Angsuran</span>
          <p>Rp. 3,012,000.00</p>
        </div>
        <div className="col">
          <span>Tunggakan</span>
          <p>Rp. 00,00</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <span>Total Tagihan</span>
        </div>
        <div className="col">
          <h5>Rp. 3,012,000.00</h5>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <h6>Metode Pembayaran</h6>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button type="button" class="btn btn-light btn-lg btn-block">
            <div className="row mt-1">
              <div className="col">
                <img src={Spin} alt="" className="logospin" />
              </div>
              <div className="col">
                <p className="text-right spin">SPIN Payment</p>
              </div>
              <div className="col-sm-2">
                <FaChevronRight className="spin-right" />
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <button
            type="button"
            class="btn btn-outline-primary btn-lg btn-block"
            onClick={handleShow}
          >
            <div className="row mt-3">
              <div className="col">
                <p className="pilih-metode">Pilih Metode Pembayaran Lain</p>
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className="row mt-5">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Pembayaran</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Pilih />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};
export default MetodePembayaran;
