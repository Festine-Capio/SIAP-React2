import React, {useRef} from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Mobil from "assets/images/mobil_3x.png";
import Cam from "assets/images/foto_3x.png";
import Aman from "assets/images/tumbnail-image-aman.png";
import { Accordion, Card, ListGroup, Dropdown, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Form} from "react-bootstrap";

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
        <div className="col-md-6">
          <div className="row mt-5">
            <div className="col ">
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
          <div className="row mt-3">
            <div className="col">
              <Form.Group>
                <div className="upload-file">
                  <input
                    type="file"
                    ref={avatarFile}
                    name="avatar"
                    onClick={handleAvatarClick}
                  />
                  <div className="row mt-3 ml-1">
                    <div className="col-sm-3">
                      <img src={Cam} alt="" className="upload-icon" />
                    </div>
                    <div className="col">
                      <div className="row">
                        <h6>Upload foto STNK</h6>
                      </div>
                      <div className="row">
                        <span className="upload-span">
                          STNK miliki sesuai data diri pribadi dan asli
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <Form.Group>
                <div className="upload-file">
                  <input
                    type="file"
                    ref={avatarFile}
                    name="avatar"
                    onClick={handleAvatarClick}
                  />
                  <div className="row mt-3 ml-1">
                    <div className="col-sm-3">
                      <img src={Mobil} alt="" className="upload-icon" />
                    </div>
                    <div className="col-sm-8">
                      <div className="row">
                        <h6>Upload Foto Mobil</h6>
                      </div>
                      <div className="row">
                        <span className="upload-span">
                          Photo mobil anda, sesuai data yang ada di STNK
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Form.Group>
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
          <div className="row mt-2">
            <div className="col">
              <Form.Group>
                <div className="upload-file">
                  <input
                    type="file"
                    ref={avatarFile}
                    name="avatar"
                    onClick={handleAvatarClick}
                  />
                  <div className="row mt-3 ml-1">
                    <div className="col-sm-3">
                      <img src={Cam} alt="" className="upload-icon" />
                    </div>
                    <div className="col">
                      <div className="row">
                        <h6>Upload Foto E-KTP</h6>
                      </div>
                      <div className="row">
                        <span className="upload-span">
                          Photo asli E-KTP kamu
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col">
              <Form.Group>
                <div className="upload-file">
                  <input
                    type="file"
                    ref={avatarFile}
                    name="avatar"
                    onClick={handleAvatarClick}
                  />
                  <div className="row mt-3 ml-1">
                    <div className="col-sm-3">
                      <img src={Selfie} alt="" className="upload-icon" />
                    </div>
                    <div className="col">
                      <div className="row">
                        <h6>Selfie dengan E-KTP</h6>
                      </div>
                      <div className="row">
                        <span className="upload-span">
                          Photo bareng dengan E-KTP kamu, pastikan terlihat
                          jelas
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Form.Group>
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
          <div className="row mt-2">
            <div className="col">
              <p>Alamat</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <input
                class="form-control"
                type="text"
                placeholder="Masukan Alamat"
              ></input>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <p>Propinsi</p>
            </div>
          </div>
          <div class="form-group">
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Propinsi</option>
              <option>DKI Jakarta</option>
              <option>Jawa Barat</option>
              <option>Jawa Tengah</option>
              <option>Jawa Timur</option>
            </select>
          </div>
          <div className="row mt-3">
            <div className="col">
              <p>Propinsi</p>
            </div>
          </div>
          <div class="form-group">
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Propinsi</option>
              <option>DKI Jakarta</option>
              <option>Jawa Barat</option>
              <option>Jawa Tengah</option>
              <option>Jawa Timur</option>
            </select>
          </div>
          <div className="row mt-3">
            <div className="col">
              <p>Kota / Kabupaten</p>
            </div>
          </div>
          <div class="form-group">
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Kota / Kabupaten</option>
              <option>Jakarta</option>
              <option>Bandung</option>
              <option>Semarang</option>
              <option>Surabaya</option>
            </select>
          </div>
          <div className="row mt-3">
            <div className="col">
              <p>Kelurahan</p>
            </div>
          </div>
          <div class="form-group">
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Kelurahan</option>
              <option>Kelurahan 1</option>
              <option>Kelurahan 2</option>
              <option>Kelurahan 3</option>
              <option>Kelurahan 4</option>
            </select>
          </div>
          <div className="row mt-2">
            <div className="col">
              <p>Kode Post</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <input
                class="form-control"
                type="text"
                placeholder="Kode Post"
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                ></input>
                <label class="form-check-label" for="inlineCheckbox1">
                  {" "}
                  Alamat domisili sesuai KTP
                </label>
              </div>
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
