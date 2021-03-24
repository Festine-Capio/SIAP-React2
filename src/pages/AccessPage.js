import React from "react";
import { Link } from "react-router-dom";

import Login from 'components/LoginForm';

const AccessPage = () => {
    return (
      <div className="container-fluid" style={{ height: "100vh" }}>
        <div className="row no-gutter  h-100">
          <div className="col-md-4">
            <div className="row">
              <div className="bg-login">
                <div className="mt-4 ml-4">
                  <Link to="#">[LOGO]</Link>
                </div>
              </div>
            </div>
            <div className="row"></div>
          </div>
          <div className="col-lg-8 mt-5">
            <div className="row justify-content-center align-items-center">
              <h1>Selamat Datang</h1>
            </div>
            <div className="row justify-content-center align-items-center mb-3">
              <p>
                Login untuk memulai aktivitas Pendanaan dan Investasi Anda
                sekarang juga.
              </p>
            </div>
            <Login />
          </div>
        </div>
      </div>
    );
};

export default AccessPage;