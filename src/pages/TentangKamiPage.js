import React from "react";
import NavBar from "components/NavBar";
import Disclaimer from "components/Disclaimer"
import CarouselComponent from "components/CarouselComponent";
import Foo from "components/FooterContent";
const TentangKamiPage = () => {
  return (
    <>
      <div className="row">
        <NavBar />
      </div>
      <div className="row">
        <CarouselComponent />
      </div>
      <div className="row">
        <Disclaimer/>
      </div>
      <Foo />
    </>
  );
};

export default TentangKamiPage;
