import React from 'react'

const Contact = () => {
  return (
   <div className="container">
       <div className="d-flex flex-lg-row flex-column mt-5 justify-content-between">
           <div className="contactForm w-lg-50 w-100 rounded shadow">
              <form className="d-flex flex-column m-4 p-2 ">
                <p className="d-flex justify-content-left fs-5 fw-bold">Contact Form</p>
                <div className="d-flex flex-column justify-content-left">
                  <label className='d-flex align-items-left my-2 fs-6' htmlFor="name">Full Name</label>
                  <input className=" w-100 rounded customColor  border border-dark border-opacity-25 p-2 fs-6" type="text" id="name" name="name" placeholder="Your Name" aria-label="name" required/>
                </div>
                <div className="d-flex flex-column justify-content-left">
                  <label className='d-flex align-items-left my-2 fs-6' htmlFor='email'>Email</label>
                  <input className=" w-100 rounded customColor  border border-dark border-opacity-25 p-2 fs-6" type="email" id="email" name="email" placeholder="Your email" aria-label="Email" required/>
                </div>
                <div className="d-flex flex-column justify-content-left">
                  <label className='d-flex align-items-left my-2 fs-6' htmlFor="subject">Subject</label>
                  <input className=" w-100 rounded customColor  border border-dark border-opacity-25 p-2 fs-6" type="text" id="subject" name="subject" placeholder="Subject" aria-label="Subject" required/>
                </div>
                <div className="d-flex flex-column justify-content-left">
                  <label className='d-flex align-items-left my-2 fs-6' htmlFor="message">Message</label>
                  <textarea className="w-100 rounded customColor border border-dark border-opacity-25 p-2 fs-6" id="message" name="message" cols="14" rows="6" aria-label="Message"></textarea>
                </div>
              </form>
               <div className="d-flex justify-content-left ps-2 mb-3">
                <button className="btn btn-lg btn-primary m-4 p-3 fs-6">Send Message</button>
                </div>
               </div>

               <div className="d-flex flex-column w-lg-50 w-100 justify-content-left">
                  <div className="d-flex flex-column justify-content-left">
                      <p className='d-flex justify-content-left fs-5 fw-bold mt-3 ms-5'>Contact details</p>
                      <ul>
                      <li className="d-flex">
                        <i className="me-2 mb-3">
                          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                               <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                               <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                        </i>
                        <span className="text-lg mb-4">SGGSIE&T,Nanded,Maharashtra</span>
                      </li>
                      <li className="d-flex">
                        <i className="me-2 mb-3">
                          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                        </i>
                        <span className="text-lg mb-4">snktssw567@gmail.com</span></li>

                        <li className="d-flex">
                          <i className="me-2 mb-3">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                          </i>
                          <span className="text-lg mb-4">+919156073127</span></li>
                      </ul>
                  </div>
               </div>
       </div>
   </div>
  )
}

export default Contact
