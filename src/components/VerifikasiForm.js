import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import OtpInput from "react-otp-input";
import { Button } from "react-bootstrap";

const VerifikasiForm = () => {
  
 const [OTP, setOTP] = useState("");
 const [counter, setCounter] = useState(20);
 useEffect(() => {
   const timer =counter > 0
           setInterval(() => {
              setCounter(counter - 1);
            }, 1000)
     
     
   return () => {
     clearInterval(timer);
   };
 }, []);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <h5>Verfikasi</h5>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-md-10">
          <p className="text-justify">
            Masukan kode verfikasi yang kami kirim melalui SMS ke +62877232***
          </p>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <OtpInput
          value={OTP}
          onChange={setOTP}
          autoFocus
          numInputs={4}
          className="otp"
        />
      </div>
      <div className="row mt-5 justify-content-center">
        <p className="text-center">Tidak menerima kode verifikasi ?</p>
      </div>
      <div className="row justify-content-center">
        <p>
          <Link>Kirim ulang</Link>
        </p>
      </div>
      <br />

      <Button variant="primary" size="lg" active block>
        Verifikasi
      </Button>
    </div>
  );
};
export default VerifikasiForm;
