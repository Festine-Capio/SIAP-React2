import React from "react";
import SideBar from "components/SideBar";

import NavBar2 from "components/NavbarBorrow";

import HasilSimulasiContent from "components/HasilSimulasiContent";
import Stepper from "components/StepperDanaMobil";
const DataPembayaran = () => {
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-6">
        <div className="row mt-3">
          <div className="col">
            <label for="exampleFormControlSelect1">Rencana Pembayaran</label>
          </div>
        </div>

        <select class="form-control" id="exampleFormControlSelect1">
          <option>Kredit Mobil Bekas</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <div className="row mt-3">
          <div className="col">
            <label for="exampleFormControlSelect1">Lokasi Pembayaran</label>
          </div>
        </div>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>Jakarta</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
    </div>
  );
};
export default DataPembayaran;
