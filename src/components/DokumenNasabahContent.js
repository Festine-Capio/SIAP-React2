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




const DokumenNasabahContent = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);


 

  return (
    <>
      <div className="row">
        <div className="col-sm-2">
          <FaArrowLeft className="arrow-left" />
        </div>
        <div className="col">
          <h3>Dokumen Nasabah</h3>
        </div>
      </div>
      <div className="row mt-4 ml-1">
        <div className="col">
          <Card className="text-center">
            <Card.Header>Tanda Tangan DIgital</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <div className="row">
                  <div className="col">
                    <Badge pill variant="success">
                      Telah Ditandatangani
                    </Badge>
                  </div>
                  <div className="col">
                    <p className="date-dokumen">1 Februari 2021</p>
                  </div>
                  <div className="col">
                    <p className="dokumen-name">
                      Perjanjian Mendapatkan Pinjaman SIAP Dana Mobil{" "}
                    </p>
                  </div>
                  <div className="col">
                    <Button variant="primary">Lihat Detail</Button>
                  </div>
                </div>
              </blockquote>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="row mt-5">
        <Card>
          <Card.Header>
            <div className="row">
              <div className="col-md-8">Informasi</div>
              <div className="col-sm-3">
                <p className="text-right">Lihat Detail</p>
              </div>
              <div className="col-sm-1">
                <FaChevronRight />
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            <div className="row">
              <div className="col">
                <p className="date-dokumen">1 Februari 2021</p>
              </div>
              <div className="col-md-4">
                  <p className="dokumen-name">Informasi Kontrak</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default DokumenNasabahContent;