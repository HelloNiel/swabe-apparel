import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Main/Home";
import About from "../Main/About";
import Location from "../Main/location";

const Rout = () => { 
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/location" element={<Location />} />
    </Routes>
  );
};

export default Rout;