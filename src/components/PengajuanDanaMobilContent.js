import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import BgMobil from "assets/images/mobil.PNG";
import Aman from "assets/images/tumbnail-image-aman.png";
import { Accordion, Card, ListGroup, Dropdown, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";

import Paper from "@material-ui/core/Paper";

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

function getSteps() {
  return [
    "Pengisian Form Pendaftaran",
    "Survey Lapangan",
    "Proses Persetujuan",
    "Penandatanganan Digital",
    "Pendaftaran Selesai, Angsuran berjalan",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Data Diri`;
    case 1:
      return "";
    case 2:
      return ``;
    default:
      return "";
  }
}
const PengajuanDanaMobilContent = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-2">
          <FaArrowLeft className="arrow-left" />
        </div>
        <div className="col">
          <h3>Pengajuan SIAP Dana Mobil</h3>
        </div>
      </div>
      <div className="row mt-4 ml-1">
        <div className="col">
          <Card>
            <Card.Header>Detail Form Pengajuan</Card.Header>
            <Card.Body>
              <div className={classes.root}>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((label, index) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                      <StepContent>
                        <Typography>{getStepContent(index)}</Typography>
                        <div className={classes.actionsContainer}>
                          <div>
                            <Button
                              disabled={activeStep === 0}
                              onClick={handleBack}
                              className={classes.button}
                            >
                              Back
                            </Button>
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={handleNext}
                              className={classes.button}
                            >
                              {activeStep === steps.length - 1
                                ? "Finish"
                                : "Next"}
                            </Button>
                          </div>
                        </div>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
                {activeStep === steps.length && (
                  <Paper
                    square
                    elevation={0}
                    className={classes.resetContainer}
                  >
                    <Typography>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Button onClick={handleReset} className={classes.button}>
                      Reset
                    </Button>
                  </Paper>
                )}
              </div>
            </Card.Body>
            <Card.Footer className="text-muted">Status :</Card.Footer>
          </Card>
        </div>
      </div>
      <div className="row mt-5">
        <Button variant="outline-secondary" size="lg" block>
          Punya Pertanyaan?
        </Button>
      </div>
    </>
  );
};
export default PengajuanDanaMobilContent;