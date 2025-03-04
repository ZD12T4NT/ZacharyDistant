"use client"

import { motion } from "framer-motion";
import { easings, infiniteFloatMotion, textRevealMotionFade } from "@/components/utils/animations";
import '../projectStyles.css'


export default function Page() {  // Make sure this is exported correctly!
  return (
    <motion.div
      className="project-page  h-full w-full pointer-events-auto"
      initial="initial"
      animate="animate"
      variants={textRevealMotionFade(1)}
    >
      <div className="project relative h-auto overflow-y-hidden">
        <div className="header-project flex flex-col relative h-full">
          <div className="image-wrapper w-full relative">
          <motion.img 
          src="/mcsbuild.png" 
          initial={{ y: 30 }}
          animate={{
            y: [0, -10, 10, 0], // Smooth floating motion
            transition: {
              delay: 0,
              duration: 5, // Slow and consistent movement
              ease: "linear", // Ensures constant speed
              repeat: Infinity,
            }
          }}
          className="hero-image object-contain h-full w-full inset-0" 
          alt="Hero Image" 
        />


          </div>
        </div>

        <div className="project-title p-[2em] lg:p-0 ">
          <div>
            <div className="page-head flex align-baseline">
              <div className="page-title w-full  m-0 text-ellipsis overflow-x-hidden text-[2rem] sm:text-[3.24rem] md:text-[5rem] text-left md:text-center font-[var(--main)] text-[#ff6900]">
                MCS Group
              </div>
            </div>
            <div className="next-project p-0 md:p-[2em] lg:p-0 w-full">
            <motion.hr 
                         className="head-separator bg-white h-[2px] w-full"
                         initial={{ scaleX: 0, originX: 0 }}
                         animate={{ scaleX: 1, transition: { duration: 0.8, ease: easings.easeInOutQuint } }}
                       />
            </div>
          </div>
          </div>

          <div className="project-intro p-[2em] lg:p-0 flex justify-between flex-col md:flex-row">
            <div className="project-data w-full md:w-1/2" >
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h6 className='text-[#ff6900]'>Category</h6></td>
                      <td>
                        <ul>
                          <li>Web Development</li>
                          </ul>
                          </td>
                          </tr>
                          <tr>
                            <td>
                              <h6>Year</h6>
                              </td>
                              <td>
                                <p>2024</p>
                                </td>
                                </tr>
                                <tr>
                                    <td>
                                      <ul>
                                          </ul>
                                          </td>
                                          </tr>
                                          </tbody>
                                          </table>
                                          </div>
          <div className="project-description w-full md:w-1/2 " ><p>MCS Group is a specialist recruitment consultancy based in Belfast, focusing on connecting exceptional talent with leading organizations across various sectors. Their website serves as a comprehensive platform for job seekers and employers, offering a user-friendly interface to facilitate seamless recruitment processes.</p>
          </div>
          </div>

          <div className="project-content p-[2em] lg:p-0 text-[1.2rem]" ><h6>Showcase</h6>
          <div className="project-content-wrapper"><img src="/mcsimageone.png" alt="" />
          </div>
          <div className="project-content-wrapper"><img src="/mcsimagetwo.png" alt="" /></div>
          <div className="project-content-wrapper"><img src="/mcsimagethree.png" alt="" /></div>
          <div className="project-content-wrapper"><img src="/mcsimagefour.png" alt="" /></div>
          <div className="project-content-wrapper"><img src="/mcsimagefive.png" alt="" /></div>
          
            </div>
            <div>
              <div className="next-project p-[2em] lg:p-0 w-full">
              <motion.hr 
                         className="head-separator bg-white h-[2px] w-full"
                         initial={{ scaleX: 0, originX: 0 }}
                         animate={{ scaleX: 1, transition: { duration: 0.8, ease: easings.easeInOutQuint } }}
                       />
                <a href="/projects/projectEight">
                <div className="next-project-wrapper flex flex-row justify-between ">
                  <div className="next-project-left w-1/2">
                    <div className="next-project-selected-wrapper absolute overflow-hidden">
                      <h4 className="next-project-selected pr-[12px] relative">Next project <span>→</span></h4>
                      </div>
                     
                      </div>
                      <div className="next-project-right w-1/2 text-right">
                        <h4>Coltec</h4>
                        <p>Web Development</p>
                        </div>
                        </div>
                        </a>
                        </div>
            </div>
       
        </div>
    </motion.div>
  );
}
