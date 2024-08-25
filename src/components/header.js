import React from "react";
import NavBar from "./NavigationBar";
import Carousel from "./Carousel";
import Features from "./Features";

const Header = () => {
  return (
    <header>
      <NavBar />
      <Carousel />
      <Features />
    </header>
  );
};

export default Header;
