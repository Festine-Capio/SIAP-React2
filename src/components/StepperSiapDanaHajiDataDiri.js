import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DataDiri from "components/DataDiri";
import AlamatDataDiri from "components/AlamatDataDiri";
import Pekerjaan from "components/Pekerjaan";
import Tanggungan from "components/Tanggungan";
import Kerabat from "components/Kerabat";
import Dokumen from "components/Dokumen";



import Rumah from "assets/images/rumah_3x.png";
import { FaArrowLeft } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Data Diri", "Alamat", "Pekerjaan", "Tanggungan", "Kerabat", "Dokumen"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <DataDiri/>;
    case 1:
      return <AlamatDataDiri/>;
    case 2:
      return <Pekerjaan/>;
    case 3:
      return <Tanggungan/>;
    case 4:
      return <Kerabat/>;
    case 5:
      return <Dokumen/>;
    default:
      return "Unknown stepIndex";
  }
}


const StepperDanaRumah = () => {
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
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col-md-1">
            <FaArrowLeft className="arrow-left" />
          </div>
          <div className="col-md-9">
            <div className="row regist">
              <h4>Pendaftaran SIAP Dana Rumah</h4>
            </div>
            <div className="row">
              <p>Form untuk mengajukan pendanaan</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className={classes.root}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <div>
                {activeStep === steps.length ? (
                  <div>
                    <Typography className={classes.instructions}>
                      All steps completed
                    </Typography>
                    <Button onClick={handleReset}>Reset</Button>
                  </div>
                ) : (
                  <div>
                    <Typography className={classes.instructions}>
                      {getStepContent(activeStep)}
                    </Typography>
                    <div className="row mt-5 d-flex justify-content-center">
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleReset}
                        className={classes.backButton}
                      >
                        Simpan dan teruskan nanti
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                      >
                        {activeStep === steps.length - 1
                          ? "Lanjutkan proses"
                          : "Lanjutkan proses"}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StepperDanaRumah;
