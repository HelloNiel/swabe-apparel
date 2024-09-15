import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../css/About.css';
import ShopPicture from '../partial/ShopPicture';
import storeImage from '../images/shop-pic.jpg';
import Footer from '../partial/Footer';

const About = () => {
  return (
    <>
      <ShopPicture />
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <Image src={storeImage} fluid alt="Store front" />
          </Col>
          <Col md={6}>
            <h2 className="mb-4">About MR. SWABE APPAREL</h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod kon tempor incididunt ut labore.
            </p>
            <blockquote className="blockquote my-4">
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiuski smod kon tempor incididunt ut labore.
              </p>
            </blockquote>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod kon tempor incididunt ut labore et dolore 
              magna aliqua ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default About;