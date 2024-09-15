import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import shopDetailsData from "../../assets/ShopDetails";
import "../css/Footer.css";

const ShopDetails = () => {
  return (
    <div className="shop-details-wrapper mt-5 pt-3">
      <Container fluid className="shop-details py-4">
        <div className="shop-details-content">
          <Row className="mb-4">
            <Col md={6} className="mb-4 mb-md-0">
              <h2 className="mb-3">
                By Following Us To Our Facebook Page You Can Get 30% Off
              </h2>
              <p>
                Mr. SWABE is a fashion brand that specializes in men's and
                women's.
              </p>
            </Col>
            <Col md={6}>
              <Row className="info-section">
                <Col xs={6} className="mb-3">
                  <h5 className="mb-2">Store Location:</h5>
                  <p className="mb-0">{shopDetailsData.storeLocation}</p>
                </Col>
                <Col xs={6} className="mb-3">
                  <h5 className="mb-2">Work Hours:</h5>
                  <p className="mb-0">{shopDetailsData.workHours}</p>
                </Col>
                <Col xs={6} className="mb-3">
                  <h5 className="mb-2">Phone:</h5>
                  <p className="mb-0">{shopDetailsData.phone}</p>
                </Col>
                <Col xs={6} className="mb-3">
                  <h5 className="mb-2">Email:</h5>
                  <p className="mb-0">{shopDetailsData.email}</p>
                </Col>
                <Col xs={12}>
                  <h5 className="mb-2">Social Media:</h5>
                  <p className="mb-0">{shopDetailsData.socialMedia}</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr className="footer-divider" />
          <div className="copyright-section mt-3">
            <p className="mb-0">
              Copyright © 2024. Mr. SWABE, All Rights Reserved.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShopDetails;
