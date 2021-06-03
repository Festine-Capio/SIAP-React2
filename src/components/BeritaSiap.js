import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import CoverBerita from "assets/images/cover_berita.png";
const berita = [
  {
    content: "Kenali lebih jauh Siap Investasi dan Dana! ",
  },
  {
    content: "Kenali lebih jauh Siap Investasi dan Dana! ",
  },
  {
    content: "Kenali lebih jauh Siap Investasi dan Dana! ",
  },
  {
    content: "Kenali lebih jauh Siap Investasi dan Dana! ",
  },
];
const BeritaSiap = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col">
          <div className="row">
            <h4>Berita SIAP</h4>
          </div>
          <div className="row">
            <p>Temukan Info menarik Tentang SIAP</p>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="row mt-4">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="list-grid-prof">
            {berita.map((berita) => (
              <div>
                <img
                  src={CoverBerita}
                  alt="thumbnail"
                  className="foto"
                  style={{
                    width: 210,
                    height: 87,
                    objectFit: "cover",
                  }}
                />

                <p>{berita.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default BeritaSiap;
