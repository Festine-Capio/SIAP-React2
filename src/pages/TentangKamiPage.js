import React from "react";
import NavBar from "components/NavBar";
import Disclaimer from "components/Disclaimer"
import CarouselComponent from "components/CarouselComponent";
import Foo from "components/FooterContent";
import Tentang from "components/TentangContent";
import TentangSiap from "components/TentangSiap";
const TentangKamiPage = () => {
  return (
    <>
      <div className="row">
        <NavBar />
      </div>
      <div className="container">
        <div className="section-space150">
          <Tentang />
          <TentangSiap/>
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
