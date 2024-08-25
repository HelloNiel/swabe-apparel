import React from "react";
import NavBar from "./NavigationBar";
import Carousel from "./Carousel";
import HeroSection from "./HeroSection";

const Header = () => {
  return (
    <header>
      <NavBar />
      <Carousel />
      <HeroSection />
    </header>
  );
};

export default Header;
