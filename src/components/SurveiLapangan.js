import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import BgMobil from "assets/images/mobil.PNG";
import Aman from "assets/images/tumbnail-image-aman.png";
import { Accordion, Card, ListGroup, Dropdown, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const SurveiLapangan = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <h5>Survey Lapangan</h5>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <span>No. Kontrak</span>
          <p>0807270823082</p>
        </div>
        <div className="col">
          <span>Status</span>
          <p>Sedang Berjaan</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="text-justify">
            Survey lapangan akan dilakukan pada tanggal dibawah ini, kami akan
            menghubungi Anda. Pastikan nomor telepon dapat dihubungi.
          </p>
        </div>
      </div>
    </>
  );
};
export default SurveiLapangan;
