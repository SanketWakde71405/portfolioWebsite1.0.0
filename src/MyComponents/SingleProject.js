import React from 'react'
import group92 from '../img/Group 92.png'
import group93 from '../img/Group 93.png'
import group94 from '../img/Group 94.png'
import group95 from '../img/Group 95.png'
import group96 from '../img/Group 96.png'
import { useLocation } from 'react-router-dom'
const SingleProject = (props) => {
  const location=useLocation();
  let fillItem=location.state.item;
  console.log(fillItem.name);
  return (
    <div className="container mx-auto my-5 pt-5">
      <div className="d-flex flex-column justify-content-left align-items-left">
        <p className="fs-2 fw-bold d-flex justify-content-left">{fillItem.name}</p>
        <div className='d-flex flex-row'>
          <div className="d-flex">
            <ion-icon className="mb-3" name="time-outline" size="large"></ion-icon>
            <span className='mx-2 mt-1'>{fillItem.date}</span>
          </div>
          <div className="d-flex">
            <ion-icon className="mb-3" name="pricetag-outline" size="large"></ion-icon>
            <span className="ms-2 mt-1">{fillItem.desc}</span>
          </div>
        </div>

        <div className="d-flex flex-lg-row flex-column mt-5 justify-content-between">
          <img className="rounded img-responsive w-25 mb-lg-0 mb-2" src={group94} alt="" />
          <img className="rounded img-responsive w-25 mb-lg-0 mb-2" src={group95} alt="" />
          <img className="rounded img-responsive w-25 mb-lg-0 mb-2" src={group96} alt="" />
        </div>
      </div>

      <div className="row">
          <div className="col-lg-4 col-sm-12 mt-5 me-lg-0 me-4">
              <h5 className="fw-bold d-flex justify-content-left text-start">About Client</h5>
              <p className="d-flex justify-content-left mb-0 text-start">Name: {fillItem.client}</p>
              <p className="d-flex justify-content-left mb-0 text-start">Services: {fillItem.service}</p>
              <p className="d-flex justify-content-left mb-0 text-start">Website: {fillItem.website}</p>
              <p className="d-flex justify-content-left mb-5 text-start">Phone: {fillItem.phone}</p>
              <h5 className="fw-bold d-flex justify-content-left text-start">Objective</h5>
              <p className="d-block justify-content-left mb-5 text-start">{fillItem.obj}</p>
              <h5 className="fw-bold d-flex justify-content-left text-start">Tools & Technologies</h5>
              <p className="d-flex justify-content-left mb-5">{fillItem.toolsTech}</p>
              <h5 className="fw-bold d-flex justify-content-left text-start">Share This</h5>

              <div className="d-flex justify-content-left">
              <button type="button"  className="btn rounded customColor svgButton me-2">
                <ion-icon name="logo-twitter"></ion-icon>
              </button>
              <button type="button"  className="btn rounded customColor svgButton me-2">
                <ion-icon name="logo-instagram"></ion-icon>
              </button>
              <button type="button"  className="btn rounded customColor svgButton me-2">
               <ion-icon name="logo-facebook"></ion-icon>
              </button>
              <button type="button"  className="btn rounded customColor svgButton me-2">
                <ion-icon name="logo-linkedin"></ion-icon>
              </button>
              <button type="button"  className="btn rounded customColor svgButton me-2">
                <ion-icon name="logo-youtube"></ion-icon>
              </button>
              </div>
            
          </div>
          <div className="col-lg-8 col-sm-12 mt-5">
            <h5 className="fw-bold d-flex justify-content-left text-start">Challenge</h5>
            <p className="d-block justify-content-left text-start">
                {fillItem.challenge1}
            </p>
            <p className="text-start">{fillItem.challenge2}</p>
            <p className="text-start">{fillItem.challenge3}</p>
            <p className="text-start">{fillItem.challenge4}</p>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-left mt-5">
          <p className="fw-bold text-start fs-2">Related Projects</p>
          <div className="d-flex flex-lg-row flex-column justify-content-between">
          <img className="rounded img-responsive w-25 me-3" src={group92} alt="" />
          <img className="rounded img-responsive w-25 me-3" src={group93} alt="" />
          <img className="rounded img-responsive w-25 me-3" src={group92} alt="" />
          <img className="rounded img-responsive w-25 me-3" src={group93} alt="" />
          </div>
        </div>

    </div>
  )
}

export default SingleProject
