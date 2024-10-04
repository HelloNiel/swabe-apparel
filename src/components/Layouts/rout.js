import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Main/Home";
import About from "../Main/About";
import Products from "../Main/Product";
import Location from "../Main/location"; 
import Shoes from "../Main/Shoes";
import Pants from "../Main/Pants";
import Shirts from "../Main/Shirts";
import Collection from "../Main/Collection"


const Rout = () => { 
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/location" element={<Location />} />
      <Route path="/shoes" element={<Shoes />} />
      <Route path="/pants" element={<Pants />} />
      <Route path="/shirts" element={<Shirts />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Rout;