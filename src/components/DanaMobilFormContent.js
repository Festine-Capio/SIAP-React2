import React, { useRef } from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Mobil from "assets/images/mobil_3x.png";
import Cam from "assets/images/foto_3x.png";
import Aman from "assets/images/tumbnail-image-aman.png";
import { Accordion, Card, ListGroup, Dropdown, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Form } from "react-bootstrap";

import Selfie from "assets/images/selfie-ktp-2_2021-05-06/selfie-ktp-2@3x.png";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const FormSimulasi = () => {
  const avatarFile = useRef();

  const handleAvatarClick = () => {
    avatarFile.current.click();
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-2">
          <FaArrowLeft className="arrow-left" />
        </div>
        <div className="col">
          <div className="row">
            <h4>Simulasi Pendanaan Mobil</h4>
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
      <div className="row mt-4 ml-1">
        <div className="col">
          <div class="form-group">
            <label for="exampleFormControlSelect1">Wilayah Domisili</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih wilayah</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">Plat Nomor</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Plat nomor</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">Model Mobil</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Model</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">Tipe Mobil</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih tipe</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">Asuransi</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Asuransi</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div className="col">
          <div class="form-group">
            <label for="exampleFormControlSelect1">Kota Domisili</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Kota Domisili</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">Brand Kendaraan</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Brand</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">Tahun Kendaraan</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Tahun</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">Atas Nama BPKB</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pribadi/Keluarga</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
export default FormSimulasi;
