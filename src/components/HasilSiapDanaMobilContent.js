import React from "react";
import SideBar from "components/SideBar";
import Icon from "assets/images/search.png";
import NavBar2 from "components/NavbarBorrow";
import { Breadcrumb } from "react-bootstrap";
import HasilSimulasi from "components/HasilSimulasiDanaRumahContent";
import { FaArrowLeft } from "react-icons/fa";
import Mobil from "assets/images/mobil_3x.png";
const HasilSiapDanaMobilContent = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-2">
          <FaArrowLeft className="arrow-left" />
        </div>
        <div className="col">
          <div className="row">
            <h4>Hasil Simulasi Mobil</h4>
          </div>
          <div className="row">
            <p>Ringkasan hasil simulasi</p>
          </div>
        </div>
        <div className="col">
          <div className="row d-flex justify-content-end">
            <img src={Mobil} alt="" className="car" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="row">
                      <p>Wilayah Domisili</p>
                    </div>
                    <div className="row">
                      <h6>JABODETABEK/JABAR/BANTEN</h6>
                    </div>
                    <div className="row mt-4">
                      <p>Brand Kendaraan</p>
                    </div>
                    <div className="row">
                      <h6>DAIHATSU</h6>
                    </div>
                    <div className="row mt-4">
                      <p>Model Mobil</p>
                    </div>
                    <div className="row">
                      <h6>AYLA X 1.0 MT</h6>
                    </div>
                    <div className="row mt-4">
                      <p>Tahun Kendaraan</p>
                    </div>
                    <div className="row">
                      <h6>2017</h6>
                    </div>
                    <div className="row mt-4">
                      <p>Tipe Mobil</p>
                    </div>
                    <div className="row">
                      <h6>Matic</h6>
                    </div>
                    <div className="row mt-4">
                      <p>Atas Nama BPKB</p>
                    </div>
                    <div className="row">
                      <h6>Pribadi/Pasangan</h6>
                    </div>
                    <div className="row mt-4">
                      <p>Asuransi</p>
                    </div>
                    <div className="row">
                      <h6>All Risk</h6>
                    </div>
                    <div className="row mt-4">
                      <p>Maks Pokok Pembiayaan</p>
                    </div>
                    <div className="row">
                      <h6>Rp. 87,550,000.00</h6>
                    </div>

                    <div className="row mt-4">
                      <p>Maks Pokok PInjaman</p>
                    </div>
                    <div className="row">
                      <h6>Rp. 87,550,000.00</h6>
                    </div>
                    <div className="row mt-4">
                      <p>Pengajuan Pokok Pinjaman</p>
                    </div>
                    <div className="row">
                      <h6>Rp. 50,000,000.00</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card simulasi-card">
            <div className="row">
              <div className="col-sm-3">
                <div className="row ml-1 mt-1">
                  <div className="col">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center ml-1">
                  <div className="col">
                    <h3 className="text-center">12 Bulan</h3>
                  </div>
                </div>
                <div className="row"></div>
              </div>
              <div className="col">
                <table class="table table-bordered simulasi-table">
                  <thead>
                    <tr>
                      <th scope="col">Angsuran</th>
                      <th scope="col">Pencairan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Rp. 4,634,000 /Bln</td>
                      <td>Rp. 44,634,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HasilSiapDanaMobilContent;
