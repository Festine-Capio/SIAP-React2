import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DataAset from "components/DataAsetMobil";
import InfoDiriPasangan from "components/InformasiDiriPasanganMobil";
import Dokumen from "components/DokumenDanaRumah";
import Mobil from "assets/images/mobil_3x.png";
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
  return [
    "Data Aset",
    "Informasi Diri & Pasangan",
    "Informasi Alamat",
    "Informasi Data Pekerjaan & Usaha",
    "Informasi Bank & Rekening",
    "Unggah Dokumen"
  ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <DataAset />;
    case 1:
      return <InfoDiriPasangan />;
    case 2:
      return <Dokumen />;
    case 3:
      return <Dokumen />;
    case 4:
      return <Dokumen />;
    case 5:
      return <Dokumen />;
    default:
      return "Unknown stepIndex";
  }
}

const StepperDaftarDanaMobil = () => {
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
            <div className="row">
              <h4>Pendaftaran SIAP Dana Mobil</h4>
            </div>
            <div className="row">
              <p>Form untuk mengajukan pendanaan</p>
            </div>
          </div>
          <div className="col">
            <div className="row d-flex justify-content-end">
              <img
                src={Mobil}
                alt=""
                style={{
                  width: "74px",
                  height: "74px",
                }}
              />
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
export default StepperDaftarDanaMobil;
