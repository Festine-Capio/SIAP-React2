import React from "react";
import NavBar from "components/NavBar";
import Disclaimer from "components/Disclaimer"
import CarouselComponent from "components/CarouselComponent";
import Foo from "components/FooterContent";
import Tentang from "components/TentangContent";
import TentangSiap from "components/TentangSiap";
import Corporate from "components/CorporateValue";
import Tim from "components/Tim";
const TentangKamiPage = () => {
  return (
    <>
      <div className="row">
        <NavBar />
      </div>
      <div className="container">
        <div className="section-space150">
          <Tentang />
          <TentangSiap />
        </div>
      </div>
      <Corporate />
      <div className="container">
        <div className="section-space150">
         <Tim/>
        </div>
      </div>
      <div className="row">
        <Disclaimer />
      </div>
      <Foo />
    </>
  );
};

export default TentangKamiPage;
