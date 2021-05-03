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
const SyaratKetentuanContent = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <FaArrowLeft className="arrow-left" />
        </div>
      </div>
      <div className="row mt-4 ml-1">
        <div className="col">
          <div className="row d-flex justify-content-center">
            <div className="col">
              <h6 className="text-center">
                SYARAT DAN KETENTUAN LAYANAN <br />
                SIAP DANA MOBIL <br />
                (“SYARAT DAN KETENTUAN”)
              </h6>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <h7>Selamat datang di Layanan SIAP Dana Mobil</h7>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <p className="text-justify">
                Syarat dan Ketentuan ini mengatur pemakaian jasa yang ditawarkan
                oleh PT MNC Finance terkait penggunaan Layanan SIAP Dana Mobil.
                Pengguna disarankan membaca dengan teliti karena berdampak
                kepada hak dan kewajiban Pengguna sesuai dengan hukum yang
                berlaku di Indonesia.
                <br />
                <br />
                Dengan mendaftar dan atau menggunakan Layanan SIAP Dana Mobil,
                maka setiap pengguna dianggap telah membaca, mengerti, memahami
                dan menyetujui semua isi dalam Syarat dan Ketentuan yang
                berlaku.
                <br />
                <br />
                Syarat dan Ketentuan ini merupakan bentuk kesepakatan yang
                dituangkan dalam sebuah perjanjian yang sah antara Pengguna
                dengan PT MNC Finance terkait penggunaan Layanan SIAP Dana
                Mobil. Apabila Pengguna tidak menyetujui salah satu, sebagian,
                atau seluruh isi Syarat dan Ketentuan ini, maka Pengguna
                dipersilahkan untuk tidak melanjutkan menggunakan Layanan SIAP
                Dana Mobil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SyaratKetentuanContent;