import React from "react";

import { FaArrowLeft } from "react-icons/fa";
import Rumah from "assets/images/rumah_3x.png";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const HasilSimlasiDanaRumahContent = () => {
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
              <h6>Struktur Kredit</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <p>Nilai Pinjam</p>
            </div>
            <div className="col">
              <p> : </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <p>Jangak Waktu </p>
            </div>
            <div className="col">
              <p> : </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <p>Angsuran </p>
            </div>
            <div className="col">
              <p> : </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <h6>Biaya - Biaya</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <p>Admin</p>
            </div>
            <div className="col">
              <p>:</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <p>Provinsi</p>
            </div>
            <div className="col">
              <p>:</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <p>Total Biaya</p>
            </div>
            <div className="col">
              <p>:</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <h6>Dana diterima</h6>
            </div>
            <div className="col">
              <p>:</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <div className="row d-flex justify-content-center">
            <button type="button" class="btn btn-outline-secondary">
              Simpan dan teruskan nanti
            </button>
            &nbsp;
            <button type="button" class="btn btn-primary">
              Lanjutkan proses
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default HasilSimlasiDanaRumahContent;
