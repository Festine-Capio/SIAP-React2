import React from "react";
import SideBar from "components/SideBar";
import Icon from "assets/images/search.png";
import NavBar2 from "components/NavbarBorrow";
import Detail from "assets/images/detailberita.png";
import PromoPic from "assets/images/promo.png";
const Promo = [
  {
    id: "1",
    content: " ",
  },
  {
    id: "2",
    content: " ",
  },
  {
    id: "3",
    content: " ",
  },
  {
    id: "4",
    content: " ",
  },
];
const PromoPage = () => {
  return (
    <div className="row">
      <div className="col">
        <SideBar />
      </div>
      <div className="col-lg-11">
        <div className="container">
          <NavBar2 />
          <div className="row mt-5">
            <div className="col">
              <div className="list-grid-prof2">
                {Promo.map((Promo) => (
                  <div>
                    <img
                      src={PromoPic}
                      alt="thumbnail"
                      className="foto"
                      style={{
                        width: 407,
                        height: 228,
                        objectFit: "cover",
                      }}
                    />

                {Promo.content}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PromoPage;
