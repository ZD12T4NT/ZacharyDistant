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
          src="/coltechome.png" 
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
              <div className="page-title w-full m-0 text-ellipsis overflow-x-hidden text-[2rem] sm:text-[3.24rem] md:text-[5rem] text-left md:text-center font-[var(--main)] text-[#008ecc]">
                Coltech 
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
                      <h6 className='text-[#008ecc]'>Category</h6></td>
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
          <div className="project-description w-full md:w-1/2 " ><p>Coltech is a leading technology consultancy specializing in scaling technology teams across Data & AI, Cloud, and Software Engineering sectors. Their website serves as a comprehensive platform to connect exceptional talent with companies across Europe and the US, focusing on delivering user-centric transformation and digital projects that enable the transition to new technologies. By offering services such as Tech Virtual Bench, Project Teams, and Project Delivery, Coltech ensures innovative, scalable results and unparalleled support for businesses of all sizes.</p>
          </div>
          </div>

          <div className="project-content p-[2em] lg:p-0 text-[1.2rem]" ><h6>Showcase</h6>
          <div className="project-content-wrapper"><img src="/coltecimageone.png" alt="" />
          </div>
          <div className="project-content-wrapper"><img src="/coltecimagetwo.png" alt="" /></div>
          <div className="project-content-wrapper"><img src="/coltecimagethree.png" alt="" /></div>
          <div className="project-content-wrapper"><img src="/coltecimagefour.png" alt="" /></div>
          
            </div>
            <div>
              <div className="next-project p-[2em] lg:p-0 w-full">
              <motion.hr 
                         className="head-separator bg-white h-[2px] w-full"
                         initial={{ scaleX: 0, originX: 0 }}
                         animate={{ scaleX: 1, transition: { duration: 0.8, ease: easings.easeInOutQuint } }}
                       />
                <a href="/projects/projectOne">
                <div className="next-project-wrapper flex flex-row justify-between ">
                  <div className="next-project-left w-1/2">
                    <div className="next-project-selected-wrapper absolute overflow-hidden">
                      <h4 className="next-project-selected pr-[12px] relative">Next project <span>→</span></h4>
                      </div>
                     
                      </div>
                      <div className="next-project-right w-1/2 text-right">
                        <h4>Kintec Global</h4>
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
