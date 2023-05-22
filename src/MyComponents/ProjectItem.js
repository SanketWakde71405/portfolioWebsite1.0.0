import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const ProjectIem = (props) => {
  // console.log(props.item.sno);
  const navigate =useNavigate();
  const ItemName=props.item;
  
  function gotoSingle(){
    navigate("/projects/SingleProject",{state: {item: ItemName}})
  }
  return (
    <div key={props.item.sno} className="col-6">
        <div className="container">
        <Link className="w-50 customColor text-decoration-none rounded my-5" aria-label="Single Project" to="/projects/SingleProject" onClick={
          (e) => {
            e.preventDefault();
            gotoSingle();
        }}>
                    <div className="d-flex flex-column rounded shadow-lg cursor-pointer mb-5">
                        <div className="text-center">
                            <img src={props.item.image} className="rounded-top border-none item img-responsive" alt="Single Project"/>
                        </div>
                        <div className="text-center text-decoration-none mt-3 mx-2">
                               <p className="text-decoration-none">{props.item.name}</p>
                        </div>
                         <div className="text-center mb-2 mx-2">
                              <span >{props.item.desc}</span>
                         </div>
                
                    </div>
                </Link>
        </div> 
    </div>

  

  )
}

export default ProjectIem
