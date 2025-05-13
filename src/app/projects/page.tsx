"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { motion } from "framer-motion";
import { textRevealMotionFade } from "@/components/utils/animations";
import { projects, Project } from '@/Types/project'; // Correct import of Project type
import NextImage from 'next/image';
import Image from 'next/image'

const MotionImage = motion(NextImage);


export default function ImageHoverComponent() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);  // Use undefined as initial state
  const tl = useRef<gsap.core.Timeline | null>(null);

  const visibleProjects: Project[] = windowWidth && windowWidth < 1200
    ? projects.slice(0, 3)
    : projects;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    gsap.to(`.image-${index}`, { opacity: 1, duration: 0.5 });
    gsap.to(`.projects-selected-${index}`, { opacity: 1, x: 0, duration: 0.5 });
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndex(null);
    gsap.to(`.image-${index}`, { opacity: 0, duration: 0.5 });
    gsap.to(`.projects-selected-${index}`, { opacity: 0, x: -20, duration: 0.5 });
  };

  return (
    <motion.div className="overflow-hidden flex flex-col lg:flex-row h-screen w-full" initial="initial" animate="animate" variants={textRevealMotionFade(1)}>
      <div className="block w-full lg:w-[55%] h-1/2 lg:h-3/4 relative lg:flex align-middle m-auto lg:ml-0 lg:mb-0">
        <div className="floating-image">
        <MotionImage
            src="/liquid-cube.png"
            alt="Liquid Cube"
            width={320}
            height={320}
            className="absolute top-[14rem] lg:top-0 left-0 object-contain bottom-0 right-0 flex m-auto justify-center align-center w-[20rem] h-full"
            style={{ objectFit: 'contain' }}
          />

        </div>
      <div className="absolute inset-0 w-full h-full">
          {visibleProjects.map((project, index) => (
            <Image
              key={index}
              src={project.hoverImage}
              alt={project.name}
              fill
              className={`image-${index} absolute inset-0 object-cover w-full h-full transition-opacity duration-500 rounded-3xl lg:rounded-tl-none lg:rounded-br-none lg:rounded-tr-3xl`}
              style={{ opacity: 0 }}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ))}
        </div>


      </div>
      <div className="w-full overflow-y-scroll overflow-x-hidden lg:w-[45%] h-full flex flex-col justify-end items-start p-10 relative">
        <div className="heading leading-3 md:leading-tight flex flex-wrap align-bottom justify-between w-full lg:w-3/4 font-bold mb-[2rem]">
          <motion.div className="font-[var(--main)] title text-[3.25rem] md:text-[5rem] text-white" variants={textRevealMotionFade(0)}>LATEST</motion.div>
          <div className="number text-2xl text-white">{visibleProjects.length.toString().padStart(2, '0')}</div>
        </div>
        <hr className="seperator border-b-1 border-white w-full lg:w-3/4 border-solid" />
        {visibleProjects.map((project: Project, index: number) => (
          <Link
            href={`/projects/${project.slug}`}
            key={index}
            prefetch={false}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="capitalize project-title text-[1.6rem] font-bold cursor-pointer my-4 mt-3 w-full lg:w-3/4 flex justify-between items-center relative after:h-[1px] after:bg-white after:w-full after:content-[''] after:absolute after:bottom-[-15px] after:left-0 flex-wrap"
          >
            <motion.div className="transition-all projects-selected-wrapper flex items-center">
              <h4
                className={`projects-selected projects-selected-${index} pr-[12px] ${windowWidth && windowWidth < 1024 ? 'block' : hoveredIndex === index ? 'block' : 'hidden'}`}
                style={{
                  transform: windowWidth && windowWidth < 1024 ? 'translateX(0)' : hoveredIndex === index ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: windowWidth && windowWidth < 1024 ? 1 : hoveredIndex === index ? 1 : 0,
                }}
              >
                → 
              </h4>
              <div>{project.name}</div>
            </motion.div>
          </Link>
        ))}
        <Link href='/projects/moreProjects' className="mt-3 text-[1.2rem] relative before:absolute before:bottom-[-0.25rem] before:h-[1px] before:w-full before:max-w-[0px] before:bg-white before:transition-all before:content-[''] hover:before:max-w-full">
          More Projects <span>→</span>
        </Link>
      </div>
    </motion.div>
  );
}
