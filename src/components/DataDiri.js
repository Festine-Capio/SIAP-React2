import React from "react";
import {Form} from "react-bootstrap";
import SideBar from "components/SideBar";

import NavBar2 from "components/NavbarBorrow";

import HasilSimulasiContent from "components/HasilSimulasiContent";
import Stepper from "components/StepperDanaMobil";
const DataDiri = () => {
  return (
    <div className="row d-flex justify-content-center">
      <div className="col mt-4">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Nama Depan</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Nama Depan" />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Nomor KTP</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Masukan Alamat Nomor KTP" />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Nomor WhastApp</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Masukan Nomor WhastApp" />
          </div>

        <div className="row">
          <div className="col-12">
            <label for="exampleInputEmail1">Jenis Kelamin</label>
          </div>
          <div className="col-3">
            <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
            <label class="form-check-label" for="exampleRadios1">
              Laki-Laki
            </label>
           </div>
          </div>
          <div className="col">
            <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
            <label class="form-check-label" for="exampleRadios2">
            Perempuan
            </label>
          </div>
          </div>
        </div>

        <div class="form-group mt-5">
            <label for="exampleInputEmail1">Tanggal Lahir</label>
            <input type="date" class="form-control" id="exampleInputEmail1" />
        </div>

         <div class="form-group">
            <label for="exampleInputEmail1">Nama Ibu Kandung</label>
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Nama Ibu Kandung" />
        </div>

        </form>
      </div>
      <div className="col mt-4">
          <div class="form-group">
            <label for="exampleInputEmail1">Nama Belakang</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Nama Belakang" />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Nomor Telepon</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Masukan Nomor Telepon" />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Masukan Alamat Email" />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Tempat Lahir</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Tempat Lahir" />
          </div>
          
         <div class="form-group">
            <label for="exampleFormControlSelect1">Pendidikan Terakhir</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Pendidikan</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

        <div class="form-group mt-4">
            <label for="exampleInputEmail1">Nomor NPWP</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Masukan Nomor NPWP" />
          </div>
      </div>
    </div>
  );
};
export default DataDiri;
