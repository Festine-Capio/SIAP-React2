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
            <p>Simulasi pelunasan untuk memberikan gambaran</p>
          </div>
        </div>
      </div>
      <div className="row mt-4 ml-1">
        <div className="col"></div>
      </div>

      <div className="row mt-5">
        <div className="col"></div>
      </div>
    </>
  );
};
export default SimulasiPelunasanContent;