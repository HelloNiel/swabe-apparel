// src/components/ShopDetails.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import shopDetailsData from "../assets/ShopDetails";

const ShopDetails = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h2 className="mb-3">
            By Following Us To Our Facebook Page You Can Get 30% Off
          </h2>
          <p className="text-muted mb-4">
            Mr. SWABE is a fashion brand that specializes in men's and women's.
          </p>
        </Col>
        <Col md={6}>
          <Row>
            <Col sm={6}>
              <h5>Store Location:</h5>
              <p>{shopDetailsData.storeLocation}</p>

              <h5>Phone:</h5>
              <p>{shopDetailsData.phone}</p>
            </Col>
            <Col sm={6}>
              <h5>Work Hours:</h5>
              <p>{shopDetailsData.workHours}</p>

              <h5>Email:</h5>
              <p>{shopDetailsData.email}</p>

              <h5>Social Media:</h5>
              <p>{shopDetailsData.socialMedia}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ShopDetails;
