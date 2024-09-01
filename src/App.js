import React from "react";
import "./App.css";
import Header from "./components/Header"; // Header Including Nav, Carousel and Features.
import MidPage from "./components/MidPage"; // Mid page include Top Products,
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <MidPage />
    </>
  );
}

export default App;
