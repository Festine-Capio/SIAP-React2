import React from "react";
import NavBar from "components/NavBar";
import CarouselComponent from "components/CarouselComponent";
import Foo from "components/FooterContent";
const LandingPage = () => {
  return (
    <>
      <div className="row">
        <NavBar />
      </div>
      <div className="row">
        <CarouselComponent />
      </div>
      <div>
        <Foo />
      </div>
    </>
  );
};

export default LandingPage;
