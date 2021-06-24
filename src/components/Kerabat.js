import React, { useRef } from "react";

import Cam from "assets/images/foto_3x.png";
import { Form } from "react-bootstrap";
import Selfie from "assets/images/selfie-ktp-2_2021-05-06/selfie-ktp-2@3x.png";
const Kerabat = () => {
     const avatarFile = useRef();

     const handleAvatarClick = () => {
       avatarFile.current.click();
     };
  return (
    <div className="container">
      <div className="container-fluid">

        <div className="row mt-4">
          <div className="col-6">

            <div class="form-group">
              <label for="exampleInputEmail1">Nama Kerabat</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Nama Kerabat" />
            </div>

             <div class="form-group">
              <label for="exampleInputEmail1">Nomor Telepon Kerabat</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Nomor Telepon Kerabat" />
            </div>

          </div>

          <div className="col-6">

            <div class="form-group">
              <label for="exampleFormControlSelect1">Hubungan</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Pilih Hubungan</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
           </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Alamat Kerabat</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Alamat Kerabat" />
            </div>


          </div>
        </div>

        

      </div>
    </div>
  );
};
export default Kerabat;
