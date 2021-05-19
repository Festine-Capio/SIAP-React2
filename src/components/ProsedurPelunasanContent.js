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
      <div className="row mt-4 ml-1">
        <div className="col">
          <p>
            Kami memberikan layanan kepada Anda yang ingin melakukan pelunasan
            pinjaman lebih awal (pelunasan dipercepat). Proses pelunasan
            dipercepat tersebut akan diperhitungkan dengan kondisi sebagai
            berikut :
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <ol>
            <li></li>
          </ol>
        </div>
      </div>
    </>
  );
};
export default ProsedurPelunasanContent;