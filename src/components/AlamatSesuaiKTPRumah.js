import React from "react";
import SideBar from "components/SideBar";

import NavBar2 from "components/NavbarBorrow";

import HasilSimulasiContent from "components/HasilSimulasiContent";
import Stepper from "components/StepperDanaMobil";
const AlamatSesuaiKTP = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p>Alamat sesuai KTP</p>
          <input
            class="form-control"
            type="text"
            placeholder="Masukkan Alamat"
          ></input>
          <br />
          <p>Kota / Kabupaten</p>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Pilih Kota / Kabupaten</option>
            <option>Jakarta</option>
            <option>Bandung</option>
            <option>Semarang</option>
            <option>Surabaya</option>
          </select>
          <br />
          <p>Kelurahan</p>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Pilih Kelurahan</option>
            <option>keluahan 1</option>
            <option>kelurahan 2</option>
            <option>kelurahan 3</option>
          </select>
        </div>
        <div className="col">
          <p>Provinsi</p>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Pilih Provinsi</option>
            <option>jawa tengah</option>
            <option>jawa timur</option>
            <option>DKI Jakata</option>
          </select>
          <br />
          <p>Kecamatan</p>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Pilih Kecamatan</option>
            <option>kecamatan 1</option>
            <option>kecamatan 2 2</option>
            <option>kecamatan 3</option>
          </select>
          <br />
          <p>Alamat sesuai KTP</p>
          <input
            class="form-control"
            type="text"
            placeholder="Masukkan Alamat"
          ></input>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h5>Alamat Domisili</h5>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />

            <label class="form-check-label" for="defaultCheck1">
              Alamat Domisili sesuai dengan KTP
            </label>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <p>Alamat sesuai KTP</p>
          <input
            class="form-control"
            type="text"
            placeholder="Masukkan Alamat"
          ></input>
          <br />
          <p>Kota / Kabupaten</p>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Pilih Kota / Kabupaten</option>
            <option>Jakarta</option>
            <option>Bandung</option>
            <option>Semarang</option>
            <option>Surabaya</option>
          </select>
          <br />
          <p>Kelurahan</p>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Pilih Kelurahan</option>
            <option>keluahan 1</option>
            <option>kelurahan 2</option>
            <option>kelurahan 3</option>
          </select>
        </div>
        <div className="col">
          <p>Provinsi</p>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Pilih Provinsi</option>
            <option>jawa tengah</option>
            <option>jawa timur</option>
            <option>DKI Jakata</option>
          </select>
          <br />
          <p>Kecamatan</p>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Pilih Kecamatan</option>
            <option>kecamatan 1</option>
            <option>kecamatan 2 2</option>
            <option>kecamatan 3</option>
          </select>
          <br />
          <p>Alamat sesuai KTP</p>
          <input
            class="form-control"
            type="text"
            placeholder="Masukkan Alamat"
          ></input>
        </div>
      </div>
    </div>
  );
};
export default AlamatSesuaiKTP;
