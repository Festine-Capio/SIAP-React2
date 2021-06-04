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
const FormSimulasi = () => {
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
      <div className="row mt-4 ml-1">
        <div className="col">
          <div className="row">
            <div className="col">
              <p>Harga Kendaraan</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                class="form-control"
                type="text"
                placeholder="Harga Kendaraan"
              ></input>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <label for="exampleFormControlSelect1">Tahun Kendaraan</label>
            </div>
          </div>

          <select class="form-control" id="exampleFormControlSelect1">
            <option>Pilih Tahun</option>
            <option>2000</option>
            <option>2000</option>
            <option>2000</option>
            <option>2000</option>
          </select>
          <div className="row mt-3">
            <div className="col">
              <label for="exampleFormControlSelect1">Asuransi</label>
            </div>
          </div>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Pilih Wilayah</option>
            <option>wilayah 2</option>
            <option>wilayah 3</option>
            <option>wilayah 4</option>
            <option>wilayah 5</option>
          </select>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <p>Harga Kendaraan</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                class="form-control"
                type="text"
                placeholder="Harga Kendaraan"
              ></input>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <label for="exampleFormControlSelect1">Jangka Waktu</label>
            </div>
          </div>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Jangka Waktu</option>
            <option>waktu</option>
            <option>waktu </option>
            <option>waktu </option>
          </select>
          <div className="row">
            <div className="col">
              <p>Area Nomor Polisi</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                class="form-control"
                type="text"
                placeholder="Area Nomor Polisi"
              ></input>
            </div>
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