import React from "react";
import SideBar from "components/SideBar";

import NavBar2 from "components/NavbarBorrow";

import HasilSimulasiContent from "components/HasilSimulasiContent";
import Stepper from "components/StepperDanaMobil";
const AlamatSesuaiKTP = () => {
  return (
    <div className="container">
      <div className="row mt-4 location">
        <div className="col-6">
         <span>Lokasi Tempat Tinggal</span>
          <div className="card py-5">
            <div className="card-body">

            </div>
          </div>
          <div className="card-footer mb-3">
              <span>Temukan Titik Lokasi</span>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">

          <div class="form-group">
            <label for="exampleInputEmail1">Alamat Sesuai KTP</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Masukan Alamat" />
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">Kota/Kab</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Kota/Kab</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">Kelurahan</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Kelurahan</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div className="col">

          <div class="form-group">
            <label for="exampleFormControlSelect1">Provinsi</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Provinsi</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">Kecamatan</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Kecamatan</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Kode Pos</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Kode Pos" />
          </div>

        </div>
      </div>

      <div className="row mt-3">
        <div className="col-12 my-4 card-location">
          <h5>Alamat Domisli</h5>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
            <label class="form-check-label" for="defaultCheck1">
              Alamat Domisili sesuai dengan KTP
            </label>
          </div>
          
          <div className="row mt-2">
            <div className="col-6">

            <div className="card py-5">
              <div className="card-body">

              </div>
            </div>
            </div>
          </div>
        </div>
        
        <div className="col-6">
          
          <div class="form-group">
            <label for="exampleInputEmail1">Alamat sesuai KTP</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Masukan Alamat" />
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">Kota/Kab</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Kota/Kab</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">Kelurahan</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Kelurahan</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div className="col-6">

          <div class="form-group">
            <label for="exampleFormControlSelect1">Provinsi</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Provinsi</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">Kecamatan</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Pilih Kecamatan</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Kode Pos</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Kode Pos" />
          </div>

        </div>
        <div className="col-6 mt-3">
          <div class="form-check">
            <label for="exampleInputEmail1" id="status">Status Tempat Tinggal</label> <br />

            <div className="row mt-3">
              <div className="col-4">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option" checked />
                <label class="form-check-label" for="exampleRadios1">
                  Milik Pribadi
                </label>
              </div>
              <div className="col-3">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                <label class="form-check-label" for="exampleRadios1">
                  Kost
                </label>
              </div>
            </div>
            
            <div className="row mt-3">
              <div className="col-4">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" checked />
                <label class="form-check-label" for="exampleRadios1">
                  Milik Orang Tua
                </label>
              </div>
              <div className="col-3">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option3" checked />
                <label class="form-check-label" for="exampleRadios1">
                  Lainnya
                </label>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-4">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" checked />
                <label class="form-check-label" for="exampleRadios1">
                 Sewa
                </label>
              </div>
            </div>

          </div>  
        </div>
      </div>
    </div>
  );
};
export default AlamatSesuaiKTP;
