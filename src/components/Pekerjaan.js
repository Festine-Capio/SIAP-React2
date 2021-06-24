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
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col">
             <label for="exampleInputEmail1">Jenis Pekerjaan</label>
          </div>
        </div>
        <div className="row ml-2">
          <div className="col-6">
            <div className="row mt-3">
                <div className="col-4">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option" checked />
                  <label class="form-check-label" for="exampleRadios1">
                    Karyawan
                  </label>
                </div>
                <div className="col-3">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                  <label class="form-check-label" for="exampleRadios1">
                    Profesional
                  </label>
                </div>
              </div>
              
              <div className="row mt-3">
                <div className="col-4">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" checked />
                  <label class="form-check-label" for="exampleRadios1">
                    PNS
                  </label>
                </div>
                <div className="col-3">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option3" checked />
                  <label class="form-check-label" for="exampleRadios1">
                    Wiraswasta
                  </label>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-4">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" checked />
                  <label class="form-check-label" for="exampleRadios1">
                  Lainnya
                  </label>
                </div>
              </div>
          </div>
         </div>
      
         <div className="row mt-4">
           <div className="col-6">
             
             <div class="form-group">
              <label for="exampleInputEmail1">Nama Perusahaan</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Perusahaan Tempat Kerja" />
            </div>
            
            <div className="row">
              <div className="col-12">
              <label label for="exampleInputEmail1">Status Pekerjaan</label>
              </div>
              <div className="col-4">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                    <label class="form-check-label" for="exampleRadios1">
                      Tetap
                    </label>
                  </div>
              </div>
              <div className="col">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                    <label class="form-check-label" for="exampleRadios2">
                      Kontrak
                    </label>
                  </div>
              </div>
            </div>
            
            <div class="form-group mt-5">
              <label for="exampleInputEmail1">Penghasilan Pekerjaan</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Nominal Penghasilan Tambahan" />
            </div>

           </div>
           <div className="col-6">
             
             <div class="form-group">
              <label for="exampleInputEmail1">Lama Bekerja</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Lama Kerja" />
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Penghasilan Utama</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Nominal Penghasilan Dari Gaji Utama" />
            </div>

           </div>
         </div>
      </div>
    </div>
  );
};
export default DokumenDanaMobil;
