import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <hr className="d-flex customColor m-5"></hr>
      <div className='text-center fs-2'>Follow me</div>
      <div className='text-center d-flex flex-lg-row flex-lg-nowrap flex-wrap justify-content-center align-items-center mx-lg-auto my-5'>
        <Link to="https://github.com/SanketWakde71405">
          <button type="button" className="btn d-block customColor rounded mx-lg-3 svgButton">
            <ion-icon className="m-4" name="logo-github" size="large"></ion-icon>
          </button>
        </Link>

        <Link to="https://www.linkedin.com/in/sanket-wakde-079829229/"> 
          <button type="button" className="btn d-block customColor rounded mx-lg-3 mx-2 svgButton">
               <ion-icon className="m-4" name="logo-linkedin" size="large"></ion-icon>
          </button>
        </Link>

        <Link to="https://twitter.com/SanketWakde8">
        <button type="button" className="btn d-block  customColor rounded mx-lg-3 mx-2 svgButton">
          <ion-icon className="m-4" name="logo-twitter" size="large"></ion-icon>
        </button>
        </Link>
       
        <Link to="https://www.instagram.com/sanket.wakde.980/">
        <button type="button" className="btn d-block  customColor rounded mx-lg-3 mx-2 svgButton">
          <ion-icon className="m-4" name="logo-instagram" size="large"></ion-icon>
        </button>
        </Link>
        
        <Link to="https://www.facebook.com/sanket.wakde.980">
        <button type="button" className="btn d-block  customColor rounded mx-lg-3 mx-2 svgButton">
          <ion-icon className="m-4" name="logo-facebook" size="large"></ion-icon>
        </button>
        </Link>
        
      </div>
      <div className='text-center d-flex justify-content-center mt-5 mb-2'>
        <p className="text-center fs-5">&copy; 2023 React & Bootstrap Portfolio.Sanket</p>
      </div>
    </div>
  )
}

export default Footer
