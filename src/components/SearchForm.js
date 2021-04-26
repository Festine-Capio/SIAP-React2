import React from "react";
import Icon from "assets/images/search.png";
import {Form, Button} from 'react-bootstrap';
const SearchForm = () => {
    return (
      <>
        <div className="row d-flex justify-content-center mb-4">
          <h3>Hi, Butuh bantuan singkat cari disini</h3>
        </div>
        <div className="form-group has-search">
          <img src={Icon} alt="" className="form-control-feedback mt-3 ml-2" />
          <input type="text" className="form-control" placeholder="Search" />
          <Button variant="primary" className="button-search" active>
            Cari
          </Button>
        </div>
        <div className="row d-flex justify-content-center mt-5">
          <span>
            atau pilih kategori untuk menemukan dengan cepat apa yang kamu
            butuhkan
          </span>
        </div>
        
      </>
    );
};
export default SearchForm;