import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";

import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Background from "components/BackGround";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(5),
  },
  textField: {
    width: "5ch",
  },
}));

const LoginMitra = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [isLoginPg, setLoginPg] = useState(true);
  const handleLoginPg = () => {
    isLoginPg === true ? setLoginPg(false) : setLoginPg(true);
  };
  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="row no-gutter  h-100">
        <Background />
        <div className="col-lg-8 mt-5">
          <div className="row justify-content-center align-items-center">
            <h1>Selamat Datang</h1>
          </div>
          <div className="row justify-content-center align-items-center mb-3">
            <p>
              Login untuk memulai aktivitas Pendanaan dan Investasi Anda
              sekarang juga.
            </p>
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col">
              <div className="row d-flex justify-content-center align-items-center">
                <TextField
                  id="standard-basic"
                  label="ID Mitra"
                  fullWidth
                  style={{
                    margin: 8,
                    width: "375px",
                    flexDirection: "column",
                  }}
                />
              </div>
              <div className="row d-flex justify-content-center align-items-center">
                <FormControl
                  fullWidth
                  className={classes.margin}
                  style={{ margin: 8, width: "375px" }}
                >
                  <InputLabel htmlFor="standard-adornment-amount">
                    Kata Sandi
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    placeholder="Password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <div className="row d-flex justify-content-center align-items-center">
                <FormControl
                  className={classes.margin}
                  style={{ margin: 8, width: "375px" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    className="mt-5"
                  >
                    Login
                  </Button>

                  <Button
                    variant="outlined"
                    color="primary"
                    className="mt-3 mb-4"
                  >
                    Daftar
                  </Button>

                 
                </FormControl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginMitra;
