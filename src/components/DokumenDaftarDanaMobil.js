import React, { useRef } from "react";

import Cam from "assets/images/foto_3x.png";
import { Form } from "react-bootstrap";
import Selfie from "assets/images/selfie-ktp-2_2021-05-06/selfie-ktp-2@3x.png";
const DokumenDanaMobil = () => {
     const avatarFile = useRef();

     const handleAvatarClick = () => {
       avatarFile.current.click();
     };
  return (
    <div className="container">
      <div className="row mt-3 d-flex justify-content-center">
        <div className="col-sm-4">
          <Form.Group>
            <div className="upload-file">
              <input
                type="file"
                ref={avatarFile}
                name="avatar"
                onClick={handleAvatarClick}
              />
              <div className="row mt-2 ml-1 mr-2">
                <div className="col-sm-3">
                  <img src={Cam} alt="" className="upload-icon" />
                </div>
                <div className="col">
                  <div className="row">
                    <h6>Upload foto STNK</h6>
                  </div>
                  <div className="row">
                    <span className="upload-span">
                      Ambil Foto KTP Asli Kamu dan Pastikan Tulisannya Terbaca
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Form.Group>
        </div>
      </div>
      <div className="row mt-1 d-flex justify-content-center">
        <div className="col-sm-4">
          <Form.Group>
            <div className="upload-file">
              <input
                type="file"
                ref={avatarFile}
                name="avatar"
                onClick={handleAvatarClick}
              />
              <div className="row mt-2 ml-1">
                <div className="col-sm-3">
                  <img src={Selfie} alt="" className="upload-icon" />
                </div>
                <div className="col">
                  <div className="row">
                    <h6>Selfie dengan E-KTP</h6>
                  </div>
                  <div className="row">
                    <span className="upload-span">
                      Photo bareng dengan E-KTP kamu, pastikan terlihat jelas
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Form.Group>
        </div>
      </div>
    </div>
  );
};
export default DokumenDanaMobil;
