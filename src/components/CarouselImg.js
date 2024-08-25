import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
import BannerImage from "./images/Banner.jpg"; // img path for the banner

const ExampleCarouselImage = ({ text }) => {
  return (
    <Image
      src={BannerImage} //imported image
      alt={text}
      fluid
    />
  );
};

ExampleCarouselImage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;
