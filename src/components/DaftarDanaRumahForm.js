import React from "react";

import { FaArrowLeft } from "react-icons/fa";
import Rumah from "assets/images/rumah_3x.png";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const FormSimulasi = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-1">
          <FaArrowLeft className="arrow-left" />
        </div>
        <div className="col">
          <div className="row">
            <h4>Pendaftaran SIAP Dana Rumah</h4>
          </div>
          <div className="row">
            <p>Form untuk mengajukan pendanaan</p>
          </div>
        </div>
        <div className="col">
          <div className="row d-flex justify-content-end">
            <img src={Rumah} alt="" className="rumah" />
          </div>
        </div>
      </div>

      <div className="row mt-4 ml-1 d-flex justify-content-center">
        <div className="col-md-5">
          <div className="row">
            <div className="col">
              <p>Pengajuan pokok pinjaman </p>
            </div>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">
                Rp
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Masukan jumlah nominal"
            />
          </div>
          <div className="row">
            <div className="col">
              <p>Pengajuan pokok pinjaman </p>
            </div>
          </div>
          <div class="input-group mb-3">
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Tahun</option>
              <option>2000</option>
              <option>2000</option>
              <option>2000</option>
              <option>2000</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-5">
        <button type="button" class="btn btn-primary">
          Kalkulasi
        </button>
      </div>
    </>
  );
};
export default FormSimulasi;
