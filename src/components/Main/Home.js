import React from 'react'
import Carousel from '../Carousel';
import Features from '../Features';
import Product from '../Product';
import MensLatest from '../MensLatest';
import WomensLatest from '../WomensLatest';
import Footer from '../partial/Footer';

function Home() {
  return (
    <>
    <Carousel />
    <Features />
    <Product />
    <MensLatest />
    <WomensLatest />
    <Footer />
    </>
  )
}

export default Home