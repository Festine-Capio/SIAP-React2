import React, { useState } from "react";
import { Link } from "react-router-dom";
import Background from "components/BackGround";
import TkbMember from "components/TkbMember";
import {Form, Button, Row, Col} from 'react-bootstrap';

const LoginPage = () => {
    
    return (
      <div className="container-fluid" style={{ height: "100vh" }}>
        <div className="row no-gutter  h-100">
          <Background />
          <div className="col-lg-8 mt-5">
            <div className="row">
              <div className="col-lg-4"></div>
              <div className="col-md-4">
                <div className="row">
                  <h1>Selamat Datang</h1>
                </div>
                <div className="row mb-3">
                  <p>
                    Login untuk memulai aktivitas Pendanaan dan Investasi Anda
                    sekarang juga.
                  </p>
                </div>
                <Form.Group>
                  <div className="row">
                    <h5>Nomor Handphone</h5>
                    <br />
                    <Form.Control type="text" placeholder="Nomor Handphone" />
                  </div>
                  <div className="row mt-4">
                    <h5>Kata Sandi</h5>
                    <br />
                    <Form.Control type="password" placeholder="Kata Sandi" />
                  </div>
                  <div className="row mt-3">
                    <p className="text-center">
                      Bermasalah dengan <Link>kata sandi ?</Link>
                    </p>
                  </div>
                  <div className="row mt-5">
                    <Button variant="primary" size="lg" active block>
                      Login
                    </Button>
                  </div>
                  <div className="row mt-3">
                    <Button variant="outline-primary" block>
                      belum punya akun? Daftar
                    </Button>
                  </div>
                  <div className="row mt-3">
                    <Button variant="outline-primary" block>
                      Punya akun Mitra, Masuk disini
                    </Button>
                  </div>
                </Form.Group>
              </div>
              <TkbMember/>
            </div>
          </div>
        </div>
      </div>
    );
};
export default LoginPage;