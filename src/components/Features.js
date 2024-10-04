import React from "react";
import { IoStorefrontOutline } from "react-icons/io5";
import { Ri24HoursFill } from "react-icons/ri";
import { RiRefund2Fill } from "react-icons/ri";
import "./css/FeaturesIcon.css";

const UncontrolledExample = () => {
  return (
    <>
      <div className="list-section pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="list-box d-flex align-items-center">
                <div className="list-icon">
                  <IoStorefrontOutline />
                </div>
                <div className="Content ">
                  <h3>Easy Walk-In</h3>
                  <p>Choose your desired size and color</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="list-box d-flex align-items-center">
                <div className="list-icon">
                  <Ri24HoursFill />
                </div>
                <div className="Content">
                  <h3>8:00 AM - 9:00 PM</h3>
                  <p>Shop Now And Get Yours</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="list-box d-flex align-items-center">
                <div className="list-icon">
                  <RiRefund2Fill />
                </div>
                <div className="Content">
                  <h3>Easy Refund</h3>
                  <p>Hassle-free returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UncontrolledExample;
