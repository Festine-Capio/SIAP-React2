import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import OtpInput from "react-otp-input";
import { Button } from "react-bootstrap";
import { Card, Modal } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import DetailBayar from "components/DetailBayar";
import Spin from "assets/images/logospin@3x.png";
import MNCBank from "assets/images/mnc_bank.png";
import BCA from "assets/images/BCA.png";
import Mandiri from "assets/images/mandiri.png";
import BNI from "assets/images/group-7@3x.png";
import Visa from "assets/images/group-9@3x.png";
import PembayaranBerhasil from "components/PembayaranBerhasil";
const PilihPembayaran = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <h6>Pembayaran Digital</h6>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                type="button"
                class="btn btn-light btn-lg btn-block"
                onClick={handleShow}
              >
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
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="row mt-3">
            <div className="col">
              <h6>Transfer Bank (Manual)</h6>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <button type="button" class="btn btn-light btn-lg btn-block">
                <div className="row mt-1">
                  <div className="col">
                    <img src={MNCBank} alt="" className="mnc-bank" />
                  </div>
                  <div className="col">
                    <p className="text-right spin">Bank MNC</p>
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
              <button type="button" class="btn btn-light btn-lg btn-block">
                <div className="row mt-1">
                  <div className="col">
                    <img src={BCA} alt="" className="bca" />
                  </div>
                  <div className="col">
                    <p className="text-right spin">Bank BCA</p>
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
              <button type="button" class="btn btn-light btn-lg btn-block">
                <div className="row mt-1">
                  <div className="col">
                    <img src={Mandiri} alt="" className="mandiri" />
                  </div>
                  <div className="col">
                    <p className="text-right spin">Bank Mandiri</p>
                  </div>
                  <div className="col-sm-2">
                    <FaChevronRight className="spin-right" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="row mt-3">
            <div className="col">
              <h6>Transfer Bank (Manual)</h6>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button type="button" class="btn btn-light btn-lg btn-block">
                <div className="row mt-1">
                  <div className="col">
                    <img src={BNI} alt="" className="bni" />
                  </div>
                  <div className="col">
                    <p className="text-right spin">Bank BNI</p>
                  </div>
                  <div className="col-sm-2">
                    <FaChevronRight className="spin-right" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="row mt-3">
            <div className="col">
              <h6>Kartu Kredit / Debit</h6>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button type="button" class="btn btn-light btn-lg btn-block">
                <div className="row mt-1">
                  <div className="col">
                    <img src={Visa} alt="" className="bni" />
                  </div>
                  <div className="col">
                    <p className="text-right spin">Visa</p>
                  </div>
                  <div className="col-sm-2">
                    <FaChevronRight className="spin-right" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="row">
            <div className="col">
              <h6>Virtual Account</h6>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button type="button" class="btn btn-light btn-lg btn-block">
                <div className="row mt-1">
                  <div className="col">
                    <img src={MNCBank} alt="" className="mnc-bank" />
                  </div>
                  <div className="col">
                    <p className="text-right spin">Bank MNC</p>
                  </div>
                  <div className="col-sm-2">
                    <FaChevronRight className="spin-right" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Pembayaran Berhasil</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PembayaranBerhasil />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};
export default PilihPembayaran;
