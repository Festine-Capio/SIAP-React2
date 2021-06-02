import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

import Aman from "assets/images/tumbnail-image-aman.png";
import { Accordion, Card, ListGroup, Dropdown, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import Reload from "assets/images/reload.svg";
import SiapHaji from "assets/images/siap_haji_3x.png";
import Mobil from "assets/images/mobil_3x.png";
import SiapRumah from "assets/images/rumah_3x.png";
import Dana from "assets/images/dana_tunai_3x.png";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const PengajuanContent = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-1">
          <FaArrowLeft className="arrow-left" />
        </div>
        <div className="col-md-9">
          <div className="row">
            <h4>Pengajuan</h4>
          </div>
        </div>
        <div className="col">
          <div className="row d-flex justify-content-end">
            <button type="button" class="btn btn-secondary btn-lg" disabled>
              <img src={Reload} alt="" className="reload" />
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-4 ml-1">
        <div className="col">
          <div class="card card-pengajuan">
            <div class="card-body">
              <div className="row">
                <div className="col">
                  <img src={SiapHaji} alt="" className="haji-pengajuan" />
                </div>
                <div className="col">
                  <span>Nama Produk</span>
                  <p>SIAP Haji</p>
                </div>
                <div className="col">
                  <span>Status</span>
                  <p>Formulir belum diselesaikan</p>
                </div>
                <div className="col">
                  <span>No. Pengajuan</span>
                  <p>SH0790830</p>
                </div>
                <div className="col">
                  <Button variant="primary btn-lg btn-block">
                    Lihat Detail
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PengajuanContent;
