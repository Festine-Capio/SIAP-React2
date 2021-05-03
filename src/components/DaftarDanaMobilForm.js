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
        <div className="col-sm-2">
          <FaArrowLeft className="arrow-left" />
        </div>
        <div className="col">
          <div className="row">
            <h4>Pendaftaran SIAP Dana Mobil</h4>
          </div>
          <div className="row">
            <p>Form untuk mengajukan pendanaan</p>
          </div>
        </div>
        <div className="col">
          <div className="row d-flex justify-content-end">
            <img src={Mobil} alt="" className="car" />
          </div>
        </div>
      </div>
      <div className="row mt-4 ml-1">
        <div className="col-md-8">
          <div className="row mt-5">
            <div className="col">
              <h3>01. Data Aset</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Plat Nomor</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input class="form-control" type="text" placeholder="A"></input>
            </div>
            <div className="col">
              <input class="form-control" type="text" placeholder="028"></input>
            </div>
            <div className="col">
              <input class="form-control" type="text" placeholder="DOE"></input>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <h3>02. Verifikasi Data</h3>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <p>Nama Lengkap</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <input
                class="form-control"
                type="text"
                placeholder="Nama Lengkap"
              ></input>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <p>Tempat Lahir</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                class="form-control"
                type="text"
                placeholder="Tempat Lahir"
              ></input>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <p>Tanggal Lahir</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div class="form-group row">
                <div class="col-10">
                  <input
                    class="form-control"
                    type="date"
                    value="2011-08-19"
                    id="example-date-input"
                  ></input>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col">
              <h3>03. Data Diri dan Pekerjaan</h3>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col">
              <p>Nama Lengkap</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <input
                class="form-control"
                type="text"
                placeholder="Nama Lengkap"
              ></input>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col">
              <p>Nomor KTP</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <input
                class="form-control"
                type="text"
                placeholder="Nomor KTP anda"
              ></input>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col">
              <p>Nama Lengkap</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <input
                class="form-control"
                type="text"
                placeholder="Nama Lengkap"
              ></input>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <p>Email</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <input
                class="form-control"
                type="text"
                placeholder="Masukan email Anda"
              ></input>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <p>Nama Ibu Kandung</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <input
                class="form-control"
                type="text"
                placeholder="Nama Ibu Kandung"
              ></input>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <p>Tempat Lahir</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <input
                class="form-control"
                type="text"
                placeholder="Tempat Lahir"
              ></input>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col">
              <p>Pekerjaan</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <input
                class="form-control"
                type="text"
                placeholder="Pekerjaan"
              ></input>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col">
              <p>Pendapatan Perbulan</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <input
                class="form-control"
                type="text"
                placeholder="Pendapatan Perbulan"
              ></input>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col">
              <h3>04. Alamat dan Survey</h3>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <Button variant="primary" size="lg" block>
                Proses Pendaftaran
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FormSimulasi;
