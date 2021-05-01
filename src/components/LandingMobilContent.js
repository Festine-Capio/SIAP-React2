import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import BgMobil from "assets/images/mobil.PNG";
import Aman from "assets/images/tumbnail-image-aman.png";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const LandingMobilContent = () => {
  return (
    <bigcard>
      <div className="section-space32">
        <div className="row">
          <div className="col">
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/" onClick={handleClick}>
                Home
              </Link>
              <Typography color="textPrimary">SIAP dana Mobil</Typography>
            </Breadcrumbs>
          </div>
        </div>
        <div className="row mt-4 ml-1">
          <div className="col">
            <div className="row">
              <img src={BgMobil} alt="jk" className="bg-mobil" />
            </div>
            <div className="row mt-4">
              <h4>SIAP dana mobil</h4>
            </div>
            <div className="row mt-3">
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                hendrerit quam. Nunc id volutpat libero. Aliquam erat volutpat.
                Nunc quis consequat massa. Proin semper elit turpis, non
                scelerisque nulla dictum in. Proin sit amet mauris ac lectus
                semper feugiat nec non odio. Curabitur sollicitudin justo ac
                lorem iaculis, nec pellentesque libero interdum.{" "}
              </p>
            </div>
            <div className="row mt-4">
              <h4>Dokumen yang diperlukan ?</h4>
            </div>
            <div className="row mt-3">
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                hendrerit quam. Nunc id volutpat libero. Aliquam erat volutpat.
                Nunc quis consequat massa. Proin semper elit turpis, non
                scelerisque nulla dictum in. Proin sit amet mauris ac lectus
                semper feugiat nec non odio. Curabitur sollicitudin justo ac
                lorem iaculis, nec pellentesque libero interdum.{" "}
              </p>
            </div>
            <div className="row mt-3">
              <div className="col">
                <div className="row d-flex justify-content-center">
                  <img src={Aman} alt="" className="dokumen" />
                </div>
                <div className="row mt-3 d-flex justify-content-center">
                  <h6>01. ID anda</h6>
                </div>
              </div>
              <div className="col">
                <div className="row d-flex justify-content-center">
                  <img src={Aman} alt="" className="dokumen" />
                </div>
                <div className="row mt-3 d-flex justify-content-center">
                  <h6>01. ID anda</h6>
                </div>
              </div>
              <div className="col">
                <div className="row d-flex justify-content-center">
                  <img src={Aman} alt="" className="dokumen" />
                </div>
                <div className="row mt-3 d-flex justify-content-center">
                  <h6>01. ID anda</h6>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <h4>Bagaimana prosesnya</h4>
            </div>
            <div className="row mt-3">
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                hendrerit quam. Nunc id volutpat libero. Aliquam erat volutpat.
                Nunc quis consequat massa. Proin semper elit turpis, non
                scelerisque nulla dictum in. Proin sit amet mauris ac lectus
                semper feugiat nec non odio. Curabitur sollicitudin justo ac
                lorem iaculis, nec pellentesque libero interdum.{" "}
              </p>
            </div>
            <div className="row mt-3">
              <div className="col">
                <div className="row d-flex justify-content-center">
                  <img src={Aman} alt="" className="dokumen" />
                </div>
                <div className="row mt-3 d-flex justify-content-center">
                  <h6>01. ID anda</h6>
                </div>
              </div>
              <div className="col">
                <div className="row d-flex justify-content-center">
                  <img src={Aman} alt="" className="dokumen" />
                </div>
                <div className="row mt-3 d-flex justify-content-center">
                  <h6>01. ID anda</h6>
                </div>
              </div>
              <div className="col">
                <div className="row d-flex justify-content-center">
                  <img src={Aman} alt="" className="dokumen" />
                </div>
                <div className="row mt-3 d-flex justify-content-center">
                  <h6>01. ID anda</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </bigcard>
  );
};
export default LandingMobilContent;