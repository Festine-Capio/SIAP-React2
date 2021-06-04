import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Mobil from "assets/images/mobil_3x.png";
import Aman from "assets/images/tumbnail-image-aman.png";
import { Accordion, Card, ListGroup, Dropdown, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const HasilSimulasiContent = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-1">
          <FaArrowLeft className="arrow-left" />
        </div>
        <div className="col-md-9">
          <div className="row">
            <h4>Simulasi Pendanaan mobil</h4>
          </div>
          <div className="row">
            <p>Simulasi pendanaan untuk memberikan gambaran</p>
          </div>
        </div>
        <div className="col">
          <div className="row d-flex justify-content-end">
            <img src={Mobil} alt="" className="car" />
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-4">
        <div className="col-md-2">
          Harga Kendaraan
        </div>
        <div className="col">
          : Rp. 300.000.000
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">Uang Muka</div>
        <div className="col">: Rp. 75.000.000</div>
      </div>
      <div className="row">
        <div className="col-md-2">Tahun Kendaraan</div>
        <div className="col">: 2016</div>
      </div>
      <div className="row">
        <div className="col-md-2">Jangka Waktu</div>
        <div className="col">: 60 Bulan</div>
      </div>
      <div className="row">
        <div className="col-md-2">Asuransi</div>
        <div className="col">: All risk</div>
      </div>
      <div className="row">
        <div className="col-md-2">Area Nomor Polisi</div>
        <div className="col">: Jabodetabek/Jabar/Banten</div>
      </div>
      <div className="row">
        <div className="col-md-2">Angsuran Perbulan</div>
        <div className="col">: Rp. 61.000.000</div>
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
export default HasilSimulasiContent;
