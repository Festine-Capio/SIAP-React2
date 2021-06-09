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

const InformasiDiriPasangaMobil = () => {
  const avatarFile = useRef();

  const handleAvatarClick = () => {
    avatarFile.current.click();
  };
  return (
    <>
      <div className="row d-flex justify-content-center mt-4 ml-1">
        <div className="col">
          <div className="form-group">
            <label for="formGroupExampleInput">Nama Lengkap</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Nama Lengkap"
            />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput">Nomor KTP</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Masukkan Alamat Nomor KTP"
            />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput">Nama Lengkap</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Nama Lengkap"
            />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput">Nomor Telepon Rumah</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Masukkan Nomor Telepon Rumah"
            />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput">Email</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Masukan Alamat Email"
            />
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <p>Jenis Kelamin</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-3">
              <div className="row">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    Laki - Laki
                  </label>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label className="form-check-label" for="inlineRadio2">
                    Perempuan
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="form-group mt-4">
            <label for="formGroupExampleInput">Nama Ibu Kandung</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Masukan Nama Ibu Kandung"
            />
          </div>

          <div className="row">
            <div className="col">
              <p>Status Pernikahan</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">
                  Single
                </label>
              </div>
            </div>
            <div className="col">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2">
                  Menikah
                </label>
              </div>
            </div>
            <div className="col">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2">
                  Cerai
                </label>
              </div>
            </div>
          </div>
          <div className="form-group mt-4">
            <label for="formGroupExampleInput">Tempat Lahir</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Masukan Tempat Lahir"
            />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput">Tanggal Lahir</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Masukan Tanggal Lahir"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default InformasiDiriPasangaMobil;
