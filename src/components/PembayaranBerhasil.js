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
import Berhasil from "assets/images/berhasil@3x.png";
const PembayaranBerhasil = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="row justify-content-center">
            <img src={Berhasil} alt="" className="berhasil" />
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-11">
          <div className="row justify-content-center">
            <h5>Terima kasih! </h5>
          </div>
          <div className="row justify-content-center">
            <p className="text-center">
              Pembayaran kamu akan kami proses, tunggu verifikasi maksimal 1x24
              jam untuk dapat pemberitahuan lanjutan.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button type="button" class="btn btn-primary btn-lg btn-block">
            Kembali ke Home
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
export default PembayaranBerhasil;
