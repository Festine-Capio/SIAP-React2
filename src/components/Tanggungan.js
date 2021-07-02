import React, { useRef } from "react";

import Cam from "assets/images/foto_3x.png";
import { Form } from "react-bootstrap";
import Selfie from "assets/images/selfie-ktp-2_2021-05-06/selfie-ktp-2@3x.png";
const DokumenDanaMobil = () => {
     const avatarFile = useRef();

     const handleAvatarClick = () => {
       avatarFile.current.click();
     };
  return (
    <div className="container">
      <div className="container-fluid">
        <div className="row js justify-content-center mt-4">
          <div className="col-6">

             <div className="form-group">
                <label for="exampleFormControlSelect1">Jumlah Tanggungan</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>Pilih jumlah Orang Tanggungan</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>

              <div className="form-group mt-4">
                <label for="exampleFormControlSelect1">Jumlah Tanggungan</label><br />
                <div className="row ml-2">
                  <div className="col">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option" checked />
                    <label class="form-check-label mt-3" for="exampleRadios1">
                      Lajang
                    </label>
                  </div>

                  <div className="col">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option" checked />
                    <label class="form-check-label mt-3" for="exampleRadios1">
                      Menikah
                    </label>
                  </div>
                  <div className="col">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option" checked />
                    <label class="form-check-label mt-3" for="exampleRadios1">
                      Cerai
                    </label>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div className="row">
          <div className="col-11">
            <h5>Data Pasangan</h5>
          </div>
          <div className="col-6">

            <div class="form-group">
              <label for="exampleInputEmail1">Nama Depan</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Nama Depan" />
            </div>

             <div class="form-group">
              <label for="exampleInputEmail1">Nomor KTP</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Masukan Alamat Nomor KTP" />
            </div>
            
             <div class="form-group">
              <label for="exampleInputEmail1">Nomor WhatsApp</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Masukan Alamat Nomor KTP" />
            </div>

            <div className="form-group mt-4">
                <label for="exampleFormControlSelect1">Jenis Kelamin</label><br />
                <div className="row ml-2">
                  <div className="col-4">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option" checked />
                    <label class="form-check-label mt-3" for="exampleRadios1">
                      Laki-Laki
                    </label>
                  </div>

                  <div className="col">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option" checked />
                    <label class="form-check-label mt-3" for="exampleRadios1">
                      Perempuan
                    </label>
                  </div>
                  
                </div>
              </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Tanggal Lahir</label>
              <input type="date" class="form-control" id="exampleInputEmail1" />
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Nama Ibu Kandung</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Nama Ibu" />
            </div>

          </div>

          <div className="col-6">

            <div class="form-group">
              <label for="exampleInputEmail1">Nama Belakang</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Nama Belakang" />
            </div>

             <div class="form-group">
              <label for="exampleInputEmail1">Nomor Telepon</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Masukan Nomor Telepon" />
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Alamat Email</label>
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

            <div class="form-group">
              <label for="exampleInputEmail1">Nomor NPWP</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Masukan Nomor NPWP" />
            </div>


          </div>
        </div>

        <div className="row mt-4">
          <div className="col-11">
            <h5>Data Domisili Pasangan</h5>
          </div>
          <div className="col-6">

            <div class="form-group">
              <label for="exampleInputEmail1">Alamat</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Masukan Alamat" />
            </div>

             <div class="form-group">
              <label for="exampleFormControlSelect1">Kota/Kabupaten</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Pilih Kota/Kabupaten</option>
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
          
        </div>

        <div className="row mt-4">
          <div className="col-11">
            <h5>Pekerjaan Pasangan</h5>
          </div>
          <div className="col-6">

            <div class="form-group">
              <label for="exampleInputEmail1">Jenis Pekerjaan Pasangan</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Jenis Pekerjaan Pasangan" />
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Penghasilan Pasanagan</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Penghasilan Pasangan" />
            </div>

          </div>

          <div className="col-6">

           <div class="form-group">
              <label for="exampleInputEmail1">Nama Perushaan</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Nama Perusahaan" />
            </div>

          </div>
          
        </div>

      </div>
    </div>
  );
};
export default DokumenDanaMobil;
