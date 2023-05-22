import React from 'react'
import Developer from '../img/developer-dark.svg'
import pdf from '../img/resume.pdf'
import { motion } from 'framer-motion';

const MainSection = () => {
 
  return (
    <div className='container m-lg-0 mx-sm-auto'>
      <motion.section className="container mt-12" initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}>
        <div className="row mt-5">
          <div className="col-lg-6 mt-5 pt-5 m-lg-0 p-lg-0 ">
               <motion.h1 className="text-center  text-uppercase text-nowrap font-weight-bolder container mt-5 pt-5 fs-2"initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}} >Hi Iam Sanket</motion.h1>
               <motion.p className="text-left font-weight-light text-nowrap container fs-4" initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}>A Developer<br></br>& Design Enthusiast</motion.p>
                 <motion.div className="container-fluid text-center col-12" initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}>
                        <a href={pdf} download="resume.pdf">
                        <button  type="button" className="d-flex flex-nowrap btn rounded resumeButton  pt-2 mx-auto">
                            <span className="text-center d-flex text-nowrap fs-5" id="download">Download CV</span>
                            <span className="d-flex align-items-center mx-2 mt-1 ">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5 " height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
                            </span>
                       </button>
                       </a>
                 </motion.div>
          </div>
          <motion.div className="col-lg-6 text-center mx-auto m-lg-0 p-lg-0" initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}>
            <img  src={Developer} alt="Developer" className="img-responsive mb-5 mw-100"/>
          </motion.div>
        </div>
      </motion.section>

    </div>
  )
}

export default MainSection
