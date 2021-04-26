import React from "react";
import Ojk from "assets/images/bitmap.png";
import Afpi from "assets/images/afpi.png";
import Mnc from "assets/images/mnc.png";
import SiapWork from "assets/images/siap-works.png";
const TentangContent = () => {
    return (
      <div className="row">
        <div className="col">
          <div className="row">
            <p>Tentang kami</p>
          </div>
          <div className="row mt-3">
            <h3>Aplikasi Finansial Terbaik Untuk Masyarakat Indonesia</h3>
          </div>
          <div className="row mt-4">
            <p>
              SIAP membantu kamu mendapatkan Pendanaan dengan mudah, aman dan
              tanpa ribet.
            </p>
          </div>
          <div className="row mt-5">
            <h5>Izin SIAP</h5>
          </div>
          <div className="row mt-3">
            <div className="col">
              <img
                src={Ojk}
                alt=""
                style={{
                  width: "102px",
                  height: "42px",
                  left:"0",
                }}
              />
            </div>
            <div className="col">
              <img
                src={Afpi}
                alt=""
                style={{
                  width: "206px",
                  height: "42px",
                }}
              />
            </div>
            <div className="col">
              <img
                src={Mnc}
                alt=""
                style={{
                  width: "100px",
                  height: "42px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="col">
            <img src={SiapWork} alt=""/>
        </div>
      </div>
    );
};
export default TentangContent;