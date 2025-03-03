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
      variants={textRevealMotionFade(0)}
    >
      <div className="project relative h-auto overflow-y-hidden">
        <div className="header-project flex flex-col relative h-full">
          <div className="image-wrapper w-full relative">
          <motion.img 
          src="/spectrumitbuild.png" 
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

        <div className="project-title p-[2em] lg:p-0 text-[#ed1c24]">
          <div>
            <div className="page-head flex align-baseline">
              <div className="page-title w-full text-left m-0 text-ellipsis overflow-x-hidden text-[3.24rem] md:text-[5rem] font-[var(--main)]">
                Project
              </div>
            </div>
             <motion.hr 
                         className="head-separator bg-white h-[2px] w-full"
                         initial={{ scaleX: 0, originX: 0 }}
                         animate={{ scaleX: 1, transition: { duration: 0.8, ease: easings.easeInOutQuint } }}
                       />
          </div>
          </div>

          <div className="project-intro p-[2em] lg:p-0 flex justify-between flex-col md:flex-row">
            <div className="project-data w-full md:w-1/2" >
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h6 className='text-[#ed1d24]'>Category</h6></td>
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
          <div className="project-description w-full md:w-1/2 " ><p>Spectrum IT Recruitment is a leading UK-based agency specializing in software and technology recruitment. Their website serves as a comprehensive platform connecting exceptional talent with leading organizations across various sectors. With a user-friendly interface and intuitive navigation, it provides a seamless experience for job seekers and employers alike. The platform highlights Spectrum IT's expertise, values, and meticulous approach to recruitment, reinforcing their reputation as industry leaders. </p>
          </div>
          </div>

          <div className="project-content p-[2em] lg:p-0 text-[1.2rem]" ><h6>Showcase</h6>
          <div className="project-content-wrapper"><img src="/spectrumimageone.png" alt="" />
          </div>
          <div className="project-content-wrapper"><img src="/spectrumimagetwo.png" alt="" /></div>
          <div className="project-content-wrapper"><img src="/spectrumimagethree.png" alt="" /></div>
          <div className="project-content-wrapper"><img src="/spectrumimagefour.png" alt="" /></div>
          <div className="project-content-wrapper"><img src="/spectrumimagefive.png" alt="" /></div>
          
            </div>
            <div>
              <div className="next-project p-[2em] lg:p-0 w-full">
              <motion.hr 
                         className="head-separator bg-white h-[2px] w-full"
                         initial={{ scaleX: 0, originX: 0 }}
                         animate={{ scaleX: 1, transition: { duration: 0.8, ease: easings.easeInOutQuint } }}
                       />
                <a href="/projects/projectThree">
                <div className="next-project-wrapper flex flex-row justify-between ">
                  <div className="next-project-left w-1/2">
                    <div className="next-project-selected-wrapper absolute overflow-hidden">
                      <h4 className="next-project-selected pr-[12px] relative">Next project <span>→</span></h4>
                      </div>
                     
                      </div>
                      <div className="next-project-right w-1/2 text-right">
                        <h4>ROC Search</h4>
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
