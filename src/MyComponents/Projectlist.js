import React from 'react'
import ProjectItem from './ProjectItem'
import { Link } from 'react-router-dom'
const Projectlist = (props) => {
  // console.log(window.location.pathname);
  const ChangeFocus=()=>{
    
    document.getElementsByTagName('input')[0].focus();
  }
  return (
    <div className='d-flex flex-column mx-auto'>
      <section className="row mt-2">

        <div className="mt-3">
          <div className="text-center">
            <p className=" text-center font-weight-bold container-fluid fs-3">Projects portfolio</p>
            <p className="text-center  py-5 fs-5 mx-sm-auto">Search projects by title or filter by category</p>
          </div>
          <div className='container'>
              <div className=" d-flex flex-lg-row flex-column justify-content-between align-items-center mx-lg-auto">
                <form className="d-flex gap-2 ms-4">
                  <button type="button" className="btn customColor rounded pe-auto svgButton" onClick={()=>{ChangeFocus()}}>
                    <i className="fa">&#xf002;</i>
                  </button>
                  <input type="search" id="SearchBox" className="p-2  rounded customColor border-0  pe-auto " aria-label=''  placeholder="Search ..." />
                </form>


                <div className="mx-lg-3 my-2">

                  <select className=" px-4 py-2 border-0 rounded  customColor ">
                    <option className="text-sm sm:text-md" value="">All Projects</option>
                    <option className="text-normal sm:text-md">Web Application</option>
                    <option className="text-normal sm:text-md">Mobile Application</option>
                    <option className="text-normal sm:text-md">UI/UX Design</option>
                    <option className="text-normal sm:text-md">Branding</option>
                  </select>
                </div>
              </div> 
          </div>
        

          <div className="container mx-auto">
            <div className="row row-cols-2">
              {props.item.map((projectItem) => {
                return (<ProjectItem key={projectItem.sno} item={projectItem}></ProjectItem>)
              })
              }
            </div>
          </div>
        </div>
        {window.location.pathname==='/projects'?"":<div className="my-5">
          <Link className="btn btn-lg btn-primary  text-center rounded px-4 py-3 fs-6" to='/projects'>More Projects</Link>
        </div>}
        
      </section>


  

    </div>
  )
}

export default Projectlist
