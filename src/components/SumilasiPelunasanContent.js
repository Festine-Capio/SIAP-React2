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




const SimulasiPelunasanContent = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  return (
    <>
      <div className="row">
        <div className="col-sm-1">
          <FaArrowLeft className="arrow-left" />
        </div>
        <div className="col">
          <div className="row">
            <h3>Simulasi Pelunasan</h3>
          </div>
          <div className="row">
            <p className="text-center">
              Simulasi pelunasan untuk memberikan gambaran
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-4 ml-1 justify-content-around">
        <div className="col-md-5 px-md-5">
          <div className="row">
            <p>Pilih nomor kontak</p>
          </div>
          <div className="row">
            <select class="form-control">
              <option>Pilih</option>
            </select>
          </div>
          <div className="row mt-5">
            <h5>Pelunasan Dipercepat</h5>
          </div>
          <div className="row mt-3">
            <p>Total Hutang</p>
          </div>
          <div className="row">
            <input
              class="form-control"
              type="text"
              placeholder="Total Hutang"
            ></input>
          </div>
          <div className="row">
            <p>Jumlah Sudah Bayar</p>
          </div>
          <div className="row">
            <input
              class="form-control"
              type="text"
              placeholder="Jumlah Sudah Bayar"
            ></input>
          </div>
          <div className="row">
            <p>Denda</p>
          </div>
          <div className="row">
            <input class="form-control" type="text" placeholder="Denda"></input>
          </div>
          <div className="row">
            <p>Collection Fee</p>
          </div>
          <div className="row">
            <input
              class="form-control"
              type="text"
              placeholder="Collection Fee"
            ></input>
          </div>
          <div className="row">
            <p>Repossession Fee</p>
          </div>
          <div className="row">
            <input
              class="form-control"
              type="text"
              placeholder="Repossession Fee"
            ></input>
          </div>
          <div className="row">
            <p>Nama</p>
          </div>
          <div className="row">
            <input class="form-control" type="text" placeholder="Nama"></input>
          </div>
          <div className="row">
            <p>Alamat</p>
          </div>
          <div className="row">
            <input
              class="form-control"
              type="text"
              placeholder="Alamat"
            ></input>
          </div>
          <div className="row">
            <p>Titipan</p>
          </div>
          <div className="row">
            <input
              class="form-control"
              type="text"
              placeholder="Titipan"
            ></input>
          </div>
          <div className="row">
            <p>Tanggal Pelunasan</p>
          </div>
          <div className="row">
            <input
              class="form-control"
              type="date"
              value="DD/MM/YYYY"
              id="example-date-input"
            ></input>
          </div>
          <div className="row">
            <p>Jenis Pembiayaan</p>
          </div>
          <div className="row">
            <select class="form-control">
              <option>Pilih Model</option>
            </select>
          </div>
          <div className="row">
            <p>Angsuran Per bulan</p>
          </div>
          <div className="row">
            <input
              class="form-control"
              type="text"
              placeholder="Jumlah Angsuran"
            ></input>
          </div>
          <div className="row mt-5">
            <Button variant="primary" size="lg" block>
              Kalkulasi
            </Button>
          </div>
        </div>

        <div className="col px-md-5">
          <div className="row justify-content-center">
            <Card className="pelunasan-card">
              <Card.Body>
                <div className="row">
                  <div className="col">
                    <h5>Hasil Simulasi</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-7">Total Hutang</div>
                  <div className="col">: -</div>
                </div>
                <div className="row">
                  <div className="col-md-7">Jumlah yang sudah dibayar</div>
                  <div className="col">: -</div>
                </div>
                <div className="row">
                  <div className="col-md-7">Denda</div>
                  <div className="col">: -</div>
                </div>
                <div className="row">
                  <div className="col-md-7">Collection Fee</div>
                  <div className="col">: -</div>
                </div>
                <div className="row">
                  <div className="col-md-7">Reprossession Fee</div>
                  <div className="col">: -</div>
                </div>
                <div className="row">
                  <div className="col-md-7">Titipan</div>
                  <div className="col">: -</div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="row mt-3 justify-content-center">
            <Card className="pelunasan-card">
              <Card.Body>
                <div className="row">
                  <div className="col-md-7">
                    <p>Total yang Harus Dibayarkan</p>
                  </div>
                  <div className="col">: -</div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="row mt-3 px-md-5">
            <Button variant="primary" size="lg" block>
              Lihat Cara Lunasi
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SimulasiPelunasanContent;