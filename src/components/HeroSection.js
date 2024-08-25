import React from "react";
import Carousel from "react-bootstrap/Carousel";

const UncontrolledExample = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title text-center mt-5 mb-5">
              Welcome to Our Shop
            </h1>
            <p className="hero-subtitle text-center">
              Discover the best deals and offers!
            </p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default UncontrolledExample;
