import React from "react";
import SideBar from "components/SideBar";
import Icon from "assets/images/search.png";
import NavBar2 from "components/NavbarBorrow";
import { Breadcrumb } from "react-bootstrap";
import PengajuanContent from "components/PengajuanContent";
import Investasi from "assets/images/investasi_3x.png";
import CarouselBorrower from "components/CarouselBorrower";
import WidgetSiap from "components/WidgetSiap";
import BeritaSiap from "components/BeritaSiap";
import ProdukSiap from "components/ProdukSiap";
const HomeBorrower = () => {
  return (
    <div className="row">
      <div className="col">
        <SideBar />
      </div>
      <div className="col-lg-11">
        <div className="container">
          <NavBar2 />
          <div className="row">
            <div className="col-md-6">
              <CarouselBorrower />
            </div>
            <div className="col-md-6">
<WidgetSiap/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <BeritaSiap/>
            </div>
            <div className="col">
              <ProdukSiap/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBorrower;
