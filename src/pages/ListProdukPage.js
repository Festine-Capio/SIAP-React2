import React from "react";
import NavBar from "components/NavBar";
import Disclaimer from "components/Disclaimer";
import CarouselComponent from "components/CarouselComponent";
import ProdukLandingPage from "components/ProdukLandingPage"; 
import SiapInvestasi from "components/SiapInvestasi";
import DanaTunai from "components/DanaTunai"
import Foo from "components/FooterContent";
import DanaHaji from "components/DanaHaji";
import DanaMobil from "components/SiapMobil";
import DanaRumah from "components/DanaRumah";
const InformasiPage = () => {
  return (
    <>
      <div className="row">
        <NavBar />
      </div>

      <div className="row mt-5">
        <ProdukLandingPage />
      </div>
     
        <SiapInvestasi />
    <DanaTunai/>
    <DanaHaji/>
    <DanaMobil/>
    <DanaRumah/>
      <div className="row">
        <Disclaimer />
      </div>
      <Foo />
    </>
  );
};

export default InformasiPage;
