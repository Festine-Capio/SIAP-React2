import React from "react";
import { Carousel, Item } from "react-bootstrap";
import Banner from "assets/images/banner.png";
const CarouselComponent = () => {
  return (
    <div>
      <Carousel
        style={{
          marginTop: "130px",
        display:"block",
          left: "0",
          right: "0",
          width:"100%"
        }}
      >
        <Carousel.Item interval={1000}>
          <img className="d-block banner" src={Banner} alt="First slide" />

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="banner" src={Banner} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="banner" src={Banner} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default CarouselComponent;
