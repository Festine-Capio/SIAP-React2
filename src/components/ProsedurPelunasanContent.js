import React from "react";

import {
  Accordion,
  Card,
  ListGroup,
  Dropdown,
  Button,
  Badge,
} from "react-bootstrap";
import { FaChevronRight, FaArrowLeft } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import Location from "assets/images/icon-location@3x.png";
import Location2 from "assets/images/lokasi-2@3x.png";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));




const ProsedurPelunasanContent = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  return (
    <>
      <div className="row">
        <div className="col-sm-1">
          <FaArrowLeft className="arrow-left" />
        </div>
        <div className="col">
          <h3>Prosedur Pelunasan Dipercepat</h3>
        </div>
      </div>
      <div className="row mt-4 ml-1 mr-3">
        <div className="col">
          <p className="text-justify">
            Kami memberikan layanan kepada Anda yang ingin melakukan pelunasan
            pinjaman lebih awal (pelunasan dipercepat). Proses pelunasan
            dipercepat tersebut akan diperhitungkan dengan kondisi sebagai
            berikut :
          </p>
        </div>
      </div>

      <div className="row mt-3 ml-5 mr-3">
        <div className="col">
          <ol className="list-prosedur">
            <li>
              Anda dapat melunasi pinjaman Anda berikut bunga dan biaya-biaya
              lainnya sebelum berakhir jangka waktu kredit, dengan ketentuan
              akan ada perhitungan penalti dan biaya administrasi yang besarnya
              seperti tercantum dalam Perjanjian Pembiayaan Konsumen.
            </li>
            <li>
              Penentuan kewajiban tersisa akan dihitung berdasarkan bunga
              efektif yang besarnya ekuivalen dengan bunga flat yang ditentukan
              pada Perjanjian Pembiayaan Konsumen dalam Ikhtisar Fasilitas
              Kredit yang telah Anda tandatangani.
            </li>
            <li>
              Pelunasan dipercepat dapat dilakukan setiap hari kerja maksimal
              pukul 12.00 waktu setempat.
            </li>
            <li>
              Anda dapat menghubungi HALO BCA 1500888, untuk mendapatkan
              estimasi jumlah pelunasan sesuai dengan tanggal yang diinginkan,
              prosedur, dan tata cara pelunasan dengan lengkap.
            </li>
            <li>
              Jika terdapat tunggakan maka pelunasan dipercepat akan dikenakan
              denda keterlambatan dan biaya pengamanan barang jaminan yang
              besarnya sesuai dengan kebijakan di BCA FINANCE.
            </li>
            <li>
              Pembayaran yang dilakukan melalui bank non BCA/RTGS, dana efektif
              kami terima adalah H+1.
            </li>
          </ol>
        </div>
      </div>
      <div className="row mt-5 justify-content-center">
        <h6>Pertanyaan Lebih Lanjut</h6>
      </div>
      <div className="row mt-3 justify-content-center">
        <div className="col-sm-2">
          <div className="row justify-content-center">
            <img src={Location} alt="" className="tanya-img" />
          </div>
          <div className="row justify-content-center">
            <p className="text-center">(021 - 3244758)</p>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="row justify-content-center">
            <img src={Location2} alt="" className="tanya-img" />
          </div>
          <div className="row justify-content-center">
            <p className="text-center">Klik untuk ke lokasi</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProsedurPelunasanContent;