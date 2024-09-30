import React from 'react'
import aboutUsBanner from '../images/about-us.jpg';   

function ShopPicture() {
  return (
    <div>
      <div className="about-banner mt-5" style={{backgroundImage: `url(${aboutUsBanner})`}}>
        <div className="about-overlay">
          <h1>MR. SWABE APPAREL </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
    </div>
  )
}

export default ShopPicture