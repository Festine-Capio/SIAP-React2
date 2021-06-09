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

const DataAsetMobil = () => {
  const avatarFile = useRef();

  const handleAvatarClick = () => {
    avatarFile.current.click();
  };
  return (
    <>
      <div className="row d-flex justify-content-center mt-4 ml-1">
        <div className="col-md-6">
          <div className="row mt-5">
            <div className="col">
              <p>Plat Nomor</p>
            </div>
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
          <div className="row d-flex justify-content-center mt-3 ml-5">
            <div className="col-md-8">
              <Form.Group>
                <div className="upload-file">
                  <input
                    type="file"
                    ref={avatarFile}
                    name="avatar"
                    onClick={handleAvatarClick}
                  />
                  <div className="row mt-2 ml-1">
                    <div className="col-sm-3">
                      <img src={Cam} alt="" className="upload-icon" />
                    </div>
                    <div className="col-md-8">
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
          <div className="row d-flex justify-content-center mt-3 ml-5">
            <div className="col-md-8">
              <Form.Group>
                <div className="upload-file">
                  <input
                    type="file"
                    ref={avatarFile}
                    name="avatar"
                    onClick={handleAvatarClick}
                  />
                  <div className="row mt-2 ml-1">
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
        </div>
      </div>
    </>
  );
};
export default DataAsetMobil;
