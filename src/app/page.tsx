"use client";

import React, { useState, useEffect, useMemo } from "react";
import ExploreButton from "@/components/ui/ExploreButton";
import { motion, AnimatePresence } from "framer-motion";
import { easings, textRevealMotion } from "@/components/utils/animations";
import ContactButton from "@/components/ui/ContactButton";


const Page = () => {
  const images = useMemo(() => [
    "/firstpointgrouphome.png",
    "/fruitiongrouphome.png",
    "/mcs.png",
    "/barringtonjames.png",
    "/spectrum.png",
    "/kintec.png",
    "/sigmar.png",
    "/integro.png",
  ], []);
  

  const [currentImage, setCurrentImage] = useState(0);

  // Memoize the images array to prevent unnecessary re-renders
  const memoizedImages = useMemo(() => images, [images]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  
    return () => clearInterval(interval);
  }, [currentImage, images]);
  

  return (
    <section className="relative no-scroll flex flex-col p-[2rem] translate-y-1/3 md:translate-y-[20%]">
      <motion.div
        className="text-white uppercase tracking-wider md:mx-auto flex-1 flex flex-col text-[2rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] leading-snug sm:leading-snug md:leading-tight relative"
        initial="initial"
        animate="animate"
      >
        {/* Image Change Container with Fade-in Effect */}
        <div className="hidden md:block image-change-container absolute top-0 -left-16 z-20 w-[33rem] h-[29rem]">
          <AnimatePresence mode="wait">
            <motion.img
              key={memoizedImages[currentImage]}
              src={memoizedImages[currentImage]}
              className="w-full h-full object-cover absolute"
              alt="Dynamic Image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        <motion.h1 className="relative z-50" variants={textRevealMotion(0)}>
          Transform
          <span className="w-full 2xl:w-auto xl:left-auto leading-none flex-wrap inline-flex justify-end md:relative md:italic md:text-[#a7ec51]">
            Your Ideas &#8623;
          </span>
        </motion.h1>

        <div className="relative z-50">
          <motion.h1
            className="z-20 flex md:justify-end w-full"
            variants={textRevealMotion(0.2)}
          >
            <span className="flex">
              Into{" "}
              <span className="italic md:not-italic text-[#4c6bc3] md:text-white ml-3">
                Exceptional
              </span>
            </span>
          </motion.h1>
        </div>

        <motion.h1
          className="leading-none z-20 flex align-middle justify-end md:justify-start md:flex-row-reverse w-full"
          variants={textRevealMotion(0.2)}
        >
          Websites
        </motion.h1>

        <div className="z-30 flex flex-wrap md:flex-nowrap mt-[3rem] md:mt-[5rem] md:justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 1,
                duration: 0.8,
                ease: easings.easeOutQuart,
              },
            }}
          >
            <div className="desc w-full md:w-auto mt-[1.3rem] md:mt-0 m-auto mb-5">
              <p className="font-normal">
                building exceptional website&apos;s for you or your business.
              </p>
              <div className="links flex ">
                <ExploreButton className="mr-6" />
                <ContactButton />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Page;
