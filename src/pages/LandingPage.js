import React from "react";
import NavBar from "components/NavBar";
import Disclaimer from "components/Disclaimer";
import ProdukLandingPage from "components/ProdukLandingPage";
import CarouselComponent from "components/CarouselComponent";
import Benefit from "components/Benefit";
import Foo from "components/FooterContent";
import Portofolio from "components/Portofolio";
import Dapatkan from "components/DapatkanPendanaan";
import Tutorial from 'components/TutorialLandingPage';
import Testimoni from 'components/TestimoniLandingPage';


const LandingPage = () => {
  return (
    <>
      <div className="row">
        <NavBar />
      </div>
      <div className="row">
        <CarouselComponent />
      </div>
      <div className="row">
        <ProdukLandingPage />
      </div>

      <Benefit />

      <div className="row">
        <Tutorial />
      </div>
      <div className="row">
        <Portofolio/>
      </div>

      <div className="row">
        <Testimoni />
      </div>

      <div>
        <Dapatkan/>
      </div>
      <div className="row">
        <Disclaimer />
      </div>

      <Foo />
    </>
  );
};

export default LandingPage;
