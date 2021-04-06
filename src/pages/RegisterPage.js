import React, { useState } from "react";
import { Link } from "react-router-dom";
import Background from "components/BackGround";
import TkbMember from "components/TkbMember";
import Verifikasi from "components/VerifikasiForm";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";

const RegisterPage = () => {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="row no-gutter  h-100">
        <Background />
        <div className="col-lg-8 mt-5">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-md-4">
              <div className="row">
                <h1>Registrasi</h1>
              </div>
              <div className="row mb-3">
                <p>
                  Jadi bagian dari pengguna aplikasi pendanaan dan investasi
                </p>
              </div>
              <Form.Group>
                <div className="row">
                  <h5>Nomor Handphone</h5>
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="Nomor handphone yang terdaftar"
                  />
                </div>
                <div className="row mt-4">
                  <h5>Kata Sandi</h5>
                  <br />
                  <Form.Control type="password" placeholder="Kata Sandi" />
                </div>
                <div className="row mt-4">
                  <h5>Ulangi kata sandi</h5>
                  <br />
                  <Form.Control
                    type="password"
                    placeholder="Masukan kata sandi untuk verifikasi"
                  />
                </div>
                <div className="row mt-5">
                  <Button
                    variant="primary"
                    size="lg"
                    active
                    block
                    onClick={handleShow}
                  >
                    Daftar
                  </Button>
                </div>
                <div className="row mt-3">
                  <p className="text-center">
                    Sudah punya akun ? <Link>Masuk</Link>
                  </p>
                </div>
              </Form.Group>
            </div>
            <TkbMember />
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        
        <Modal.Body>
          <Verifikasi/>
        </Modal.Body>
       
      </Modal>
    </div>
  );
};
export default RegisterPage;
