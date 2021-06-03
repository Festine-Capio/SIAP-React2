import React from "react";
import { Carousel, Item } from "react-bootstrap";
import Banner from "assets/images/banner.png";
const CarouselComponent = () => {
  return (
    <div>
      <Carousel
        style={{
          marginTop: "50px",
        borderRadius:"10px",
          left: "0",
          right: "0",
         width: "430px",
  height: "216px",
        }}
      >
        <Carousel.Item interval={1000}>
          <img className="d-block banner2" src={Banner} alt="First slide" />

          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="banner2" src={Banner} alt="Second slide" />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="banner2" src={Banner} alt="Third slide" />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default CarouselComponent;
