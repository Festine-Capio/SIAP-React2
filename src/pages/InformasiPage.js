import React from "react";
import NavBar from "components/NavBar";
import Disclaimer from "components/Disclaimer"
import CarouselComponent from "components/CarouselComponent";
import Dapatkan from "components/DapatkanPendanaan";
import Foo from "components/FooterContent";
import Search from "components/SearchForm";
import { Form } from "react-bootstrap";
import Produk from "components/ProdukKami";
import Pertanyaan from "components/PertanyaanUmum";
const ProdukHajiPage = () => {
  return (
    <>
      <div className="row">
        <NavBar />
      </div>
      <div className="container">
        <div className="section-space150">
          <Search />
          <Produk />
          <Pertanyaan/>
        </div>
      </div>

      <div>
        <Dapatkan />
      </div>

      <div className="row">
        <Disclaimer />
      </div>
      <Foo />
    </>
  );
};

export default ProdukHajiPage;
