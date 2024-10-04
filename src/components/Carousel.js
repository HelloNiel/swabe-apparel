import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./CarouselImg";
import "./css/Carousel.css";

function UncontrolledExample() {
  return (
    <Carousel id="Swabe" className="banner-carousel">
      <Carousel.Item>
        <ExampleCarouselImage text="slide" />
        <Carousel.Caption>
          <h3>SWABE APPAREL</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="slide" />
        <Carousel.Caption>
          <h3>SWABE APPAREL</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="slide" />
        <Carousel.Caption>
          <h3>SWABE APPAREL</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
