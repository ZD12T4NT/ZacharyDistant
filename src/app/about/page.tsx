"use client";

import React from 'react';
import Image from "next/image"
import { motion } from "framer-motion";
import { easings, textRevealMotion, textRevealMotionFade } from "@/components/utils/animations";

const Page = () => {
  return (
    <motion.div 
      className="page-content about-page relative justify-center md:justify-start flex h-screen w-full pointer-events-auto pr-[0]"
      initial="initial"
      animate="animate"
    >
      <div className="about flex flex-col md:flex-row-reverse">
        {/* Right Section - Profile Image */}
        <div className="about-right w-full md:w-1/4 relative pr-[2em] pt-[5em] pl-[2em] md:pt-0 md:pr-0">
          <div 
            className="profile-pic-wrapper relative md:pt-[177.77%] rounded-3xl md:rounded-tl-none md:rounded-br-none 
            md:rounded-tr-none md:rounded-bl-3xl overflow-y-hidden h-[30vh] sm:h-auto"
          >
         <Image
            src="/zacsnowdon.jpg"
            alt="Profile"
            loading="lazy"
            className="profile-pic relative md:absolute mix-blend-lighten rounded-bl-3xl md:object-[50%_25%] 
            object-cover h-full w-full inset-0"
          />


          </div>
        </div>

        {/* Left Section - About Text */}
        <div 
          className="about-left flex flex-col justify-center align-middle w-full md:w-3/4 md:pt-[50px] 
          md:pr-[24px] md:pb-[24px] p-[2em] md:pl-[100px] lg:pl-[140px] xl:pl-[240px]"
        >
          <motion.div initial="initial" animate="animate" style={{ opacity: 1, transform: 'none' }}>
            <div className="page-head flex align-middle">
              <motion.h2 
                className="page-title w-full uppercase text-left m-0 text-ellipsis overflow-x-hidden text-[2rem] md:text-[5rem] text-white"
                variants={textRevealMotionFade(0)}
              >
                About
              </motion.h2>
            </div>
            <motion.hr 
              className="head-separator bg-white h-[2px] w-full"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1, transition: { duration: 0.8, ease: easings.easeInOutQuint } }}
            />
          </motion.div>

          <motion.p
            className="presentation-text mt-[var(--top-internal-margin)] w-full md:w-3/4 opacity-full transform-none md:text-[1.5rem] font-normal"
            variants={textRevealMotion(0.3)}
          >
            Hi&#44; I&apos;m Zac — a Front-end Web Developer.
            I&apos;m passionate about building engaging&#44; responsive&#44; and visually-driven digital experiences. I specialize in HTML&#44; CSS&#44; JavaScript&#44; React&#44; and TailwindCSS&#44; and I love bringing interfaces to life with clean animations and thoughtful interactions.
            <br>
            </br>
            <br />
            I&apos;m constantly exploring new technologies and best practices to push my skills forward and create smooth&#44; user-focused designs. Outside of coding&#44; you&apos;ll find me at the gym&#44; spending time with my family&#44; or making the most of every opportunity that comes my way.
            <br />
            <br />
            <span className='md:text-[1.2rem]'> CV Available on Request</span>
          </motion.p>

          {/* Resume Download Link */}
          {/* <motion.div 
            className="resume-link mt-[var(--top-internal-margin)]" 
            style={{ opacity: 1, transform: 'none' }} 
            variants={textRevealMotion(0.5)}
          >
            <div className="link-wrapper w-fit overflow-x-hidden">
              <div className="link w-auto mb-[3px] whitespace-nowrap">
                <a 
                  href="ZacCVOffWhite.png" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-[1rem] relative before:absolute before:bottom-[-0.25rem] before:h-[1px] 
                  before:w-full before:max-w-[0px] before:bg-white before:transition-all before:content-[''] 
                  hover:before:max-w-full" 
                  download
                >
                  Download My CV ↓
                </a>
              </div>
            </div>
          </motion.div> */}
      <motion.div 
            className="resume-link mt-[var(--top-internal-margin)]" 
            style={{ opacity: 1, transform: 'none' }} 
            variants={textRevealMotion(0.5)}
          >
            <div className="link-wrapper w-fit overflow-x-hidden">
              <div className="link w-auto mb-[3px] whitespace-nowrap">
                <a 
                  href="/contact" 
                  rel="noreferrer" 
                  className="inline-block justify-center transition-all relative max-w-fit bg-[#fff] py-[.7rem] px-[2rem] rounded-[100em] text-black hover:bg-black hover:text-white" 
                >
                  Get in touch
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default Page;
