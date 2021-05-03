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
          <div class="form-group">
            <label for="exampleFormControlSelect1">Wilayah domisili</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Wilayah</option>
              <option>wilayah 2</option>
              <option>wilayah 3</option>
              <option>wilayah 4</option>
              <option>wilayah 5</option>
            </select>
            <div className="row mt-3">
              <div className="col">
                <label for="exampleFormControlSelect1">Kota domisili</label>
              </div>
            </div>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Wilayah</option>
              <option>wilayah 2</option>
              <option>wilayah 3</option>
              <option>wilayah 4</option>
              <option>wilayah 5</option>
            </select>
            <div className="row mt-3">
              <div className="col">
                <label for="exampleFormControlSelect1">Plat Nomor</label>
              </div>
            </div>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Wilayah</option>
              <option>wilayah 2</option>
              <option>wilayah 3</option>
              <option>wilayah 4</option>
              <option>wilayah 5</option>
            </select>
            <div className="row mt-3">
              <div className="col">
                <label for="exampleFormControlSelect1">Merek kendaraan</label>
              </div>
            </div>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Wilayah</option>
              <option>wilayah 2</option>
              <option>wilayah 3</option>
              <option>wilayah 4</option>
              <option>wilayah 5</option>
            </select>
            <div className="row mt-3">
              <div className="col">
                <label for="exampleFormControlSelect1">Model Mobil</label>
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
        </div>
        <div className="col">
          <div class="form-group">
            <label for="exampleFormControlSelect1">tahun Kendaraan</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Wilayah</option>
              <option>wilayah 2</option>
              <option>wilayah 3</option>
              <option>wilayah 4</option>
              <option>wilayah 5</option>
            </select>
            <div className="row mt-3">
              <div className="col">
                <label for="exampleFormControlSelect1">Tipe Mobil</label>
              </div>
            </div>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Wilayah</option>
              <option>wilayah 2</option>
              <option>wilayah 3</option>
              <option>wilayah 4</option>
              <option>wilayah 5</option>
            </select>
            <div className="row mt-3">
              <div className="col">
                <label for="exampleFormControlSelect1">Atas Nama BPKB</label>
              </div>
            </div>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Wilayah</option>
              <option>wilayah 2</option>
              <option>wilayah 3</option>
              <option>wilayah 4</option>
              <option>wilayah 5</option>
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
        </div>
        <div className="col">
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
            ></input>
          </div>
          <div className="row">
            <div className="col">
              <Card>
                <Card.Body>
                  <div className="row">
                    <div className="col">
                      <p>*Maksimal pokok pembiayaan berdasarkan data asset</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <h5>Rp. 0</h5>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <Button variant="secondary" size="lg" block>
                Block level button
              </Button>
              <Button variant="outline-secondary" size="lg" block>
                Block level button
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FormSimulasi;