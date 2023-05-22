import React from 'react'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'
import useThemeSwitcher from './ThemeSwitcher'

const Header = () => {
  const [activeTheme, setTheme] = useThemeSwitcher();
  return (
    <div className='mx-5'>
     <nav className="navbar navbar-expand-lg">
  <div className="container-fluid text-light">
    <Link className="navbar-brand " to="/">
    <img src={logo} height='75' width='50' alt="Logo"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/projects">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About Me</Link>
        </li>
      </ul>
      <div className='d-flex justify-content-center'>
            <button type="button" className="btn btn-primary cursor-pointer me-2" id="HireButton" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Hire Me</button>

<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 className="" id="staticBackdropLabel">What project are you looking for?</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
           <div className="d-flex flex-column justify-content-left mb-3">
                  <input className=" w-100 rounded customColor  border border-dark border-opacity-25 p-2 fs-6" type="text" id="name" name="name" placeholder="Name" aria-label="name" required/>
           </div>
           <div className="d-flex flex-column justify-content-left mb-3">
                  <input className=" w-100 rounded customColor  border border-dark border-opacity-25 p-2 fs-6" type="email" id="email" name="email" placeholder="Email" aria-label="email" required/>
           </div>
           <div className="d-flex flex-column justify-content-left mb-3">
           <select className=" px-4 py-2 border-0 rounded  customColor ">
                    <option className="text-normal sm:text-md" value="">Web Application</option>
                    <option className="text-normal sm:text-md">Mobile Application</option>
                    <option className="text-normal sm:text-md">UI/UX Design</option>
                    <option className="text-normal sm:text-md">Branding</option>
                  </select>
           </div>

           <div className="d-flex flex-column justify-content-left">
                  
                  <textarea className="w-100 rounded customColor border border-dark border-opacity-25 p-2 fs-6" id="pDescription" name="pDescription" cols="14" rows="6" placeholder="Project description" aria-label="pDescription"></textarea>
                </div>
                 
      </div>
      <div className="d-flex justify-content-left ms-3 mb-5 me-0">
         <button className="d-flex btn btn-primary px-3">Send Request</button>
      </div>
      <div className="d-flex justify-content-end me-3 mb-3 ms-0 pt-3 mt-5">
         <button className="d-flex btn btn-light px-3" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
            {activeTheme==='dark'?<Link> <button type="button" onClick={() => setTheme(activeTheme)}
                aria-label="Theme Switcher" className="d-block btn rounded w-40 h-30 fs-5 customColor cursor-pointer svgButton">
                <ion-icon name="moon-outline"></ion-icon>
                </button> </Link>:<button type="button" onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher" className="btn rounded customColor w-40 h-30 fs-5 svgButton">
                <i className="fa">&#9728;</i>
                </button>
               
                }
              
            </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
