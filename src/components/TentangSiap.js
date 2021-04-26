import React from "react";
import TtgSiap from "assets/images/shutterstock.png";
const TentangSiap = () => {
    return (
      <>
        <div className="section-space150">
          <div className="row">
            <div className="col">
              <div className="row">
                <h3>Tentang SIAP</h3>
              </div>
              <div className="row">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et hendrerit quam. Nunc id volutpat libero. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Sed et hendrerit quam.
                  Nunc id volutpat libero.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <img
                  src={TtgSiap}
                  alt=""
                  style={{ width: "650px", height: "366px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="section-space150">
          <div className="row gap">
            <div className="col ">
              <div className="row">
                <h3>Visi</h3>
              </div>
              <div className="row">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et hendrerit quam. Nunc id volutpat libero.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <h3>Misi</h3>
              </div>
              <div className="row">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et hendrerit quam. Nunc id volutpat libero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};
export default TentangSiap;
