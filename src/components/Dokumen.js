import React, { useRef } from "react";

import Camera from "assets/images/foto-general-2_2021-05-05/foto-general-2.png";
import { Form } from "react-bootstrap";
import Selfie from "assets/images/selfie-ktp-2_2021-05-06/selfie-ktp-2.png";
const Dokumen = () => {
     const avatarFile = useRef();

     const handleAvatarClick = () => {
       avatarFile.current.click();
     };
  return (
    <div className="container">
      <div className="container-fluid">

        <div className="row mt-4 justify-content-center">
          
          <div className="col-5">
            <div className="card dokument">
              <div className="cord-body p-2">
                <div className="row">
                  <div className="col-3">
                    <img src={Camera} alt="camera-alt" />
                  </div>
                  <div className="col">
                    <h5>Upload E-KTP</h5>
                    <span>Ambil Foto KTP Asli Kamu dan Pastikan Tulisan Kebaca</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
         <div className="col-5">
            <div className="card dokument">
              <div className="cord-body p-2">
                <div className="row">
                  <div className="col-3">
                    <img src={Selfie} alt="camera-alt" />
                  </div>
                  <div className="col">
                    <h5>Selfie dengan E-KTP</h5>
                    <span>Foto bareng dengan E-KTP kamu, pastikan terlihat jelas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

         <div className="row mt-4 justify-content-center">
          
          <div className="col-5">
            <div className="card dokument">
              <div className="cord-body p-2">
                <div className="row">
                  <div className="col-3">
                    <img src={Camera} alt="camera-alt" />
                  </div>
                  <div className="col">
                    <h5>Upload Foto Slip Gaji</h5>
                    <span>Ambil Foto Slip Gaji dan Pastikan Tulisanya Terbaca</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
         <div className="col-5">
            <div className="card dokument">
              <div className="cord-body p-2">
                <div className="row">
                  <div className="col-3">
                    <img src={Camera} alt="camera-alt" />
                  </div>
                  <div className="col">
                    <h5>Upload Foto KK</h5>
                    <span>Ambil Foto Kartu Keluarga dan Pastikan Tulisanya Terbaca</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

         <div className="row mt-4 justify-content-center">
          
          <div className="col-5">
            <div className="card dokument">
              <div className="cord-body p-2">
                <div className="row">
                  <div className="col-3">
                    <img src={Camera} alt="camera-alt" />
                  </div>
                  <div className="col">
                    <h5>Upload Foto NPWP</h5>
                    <span>Ambil Foto NPWP dan Pastikan Tulisan Kebaca</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
         <div className="col-5">
            <div className="card dokument">
              <div className="cord-body p-2">
                <div className="row">
                  <div className="col-3">
                    <img src={Camera} alt="camera-alt" />
                  </div>
                  <div className="col">
                    <h5>Upload Foto Buku Nikah</h5>
                    <span>Ambil Foto Buku Nikah Asli Kamu dan Pastikan Tulisan Kebaca</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        
      </div>
    </div>
  );
};
export default Dokumen;
