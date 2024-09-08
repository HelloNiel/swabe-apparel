import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header"; // Header Including Nav, Carousel and Features.
import Product from "./components/Product";
import ShopDetails from "./components/ShopDetails";
import MensLatest from "./components/MensLatest";
import WomensLatest from "./components/WomensLatest";
function App() {
  return (
    <>
      <Header />
      <Product />
      <MensLatest />
      <WomensLatest />
      <ShopDetails />
    </>
  );
}

export default App;
