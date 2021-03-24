import React from "react";
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
    width: "25ch",
  },
}));

const MitraForm = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
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
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row">
        <TextField
          id="standard-basic"
          label="Nomor HP"
          fullWidth
          style={{ margin: 8 }}
        />
        <FormControl fullWidth className={classes.margin}>
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
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <Button
            variant="contained"
            color="primary"
            disableElevation
            className="mt-5"
          >
            Login
          </Button>
          <Button variant="outlined" color="primary" className="mt-3 mb-3">
            Daftar
          </Button>

          <p style={{ textAlign: "center" }}>
            Mengalami masalah dengan login? Lupa kata sandi
          </p>

          <Button variant="outlined" color="primary" className="mt-3">
            Masuk Sebagai Mitra
          </Button>
        </FormControl>
      </div>
    </div>
  );
};
export default MitraForm;
