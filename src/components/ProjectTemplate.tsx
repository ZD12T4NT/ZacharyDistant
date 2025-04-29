"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { easings, textRevealMotionFade } from "./utils/animations";
import Image from 'next/image'
import { Project } from "@/Types/project";
import "../app/projects/projectStyles.css";

type Props = {
  project: Project;
  nextProject: Project;
};

function AnimatedImage({
  src,
  alt,
  color,
}: {
  src: string;
  alt: string;
  color?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -40% 0px" });

  return (
    <motion.div
      ref={ref}
      animate={{
        scale: isInView ? 1.03 : 1,
        filter: isInView ? "brightness(110%)" : "brightness(90%)",
        boxShadow: isInView
          ? `0 0 40px ${color || "rgba(84,200,232,0.5)"}`
          : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="my-[4rem] w-full"
    >
      <Image
        src={src}
        alt={alt}
        layout="intrinsic" // Automatically adjust based on image size
        width={1200} // Example width, adjust as necessary
        height={800} // Example height, adjust as necessary
        className="w-full h-auto object-contain"
      />
    </motion.div>
  );
}


export default function ProjectTemplate({ project, nextProject }: Props) {
  useEffect(() => {
    if (project?.titleColor) {
      document.body.style.setProperty("--scroll-thumb", project.titleColor);
    }
    return () => {
      document.body.style.removeProperty("--scroll-thumb");
    };
  }, [project]);

  return (
    <motion.div
      className="project-page h-full w-full pointer-events-auto"
      initial="initial"
      animate="animate"
      variants={textRevealMotionFade(1)}
    >
      <div className="project relative h-auto overflow-y-hidden">
        <div className="header-project flex flex-col relative h-full">
          <div className="image-wrapper w-full relative">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group block w-full h-full"
                >
                  <motion.div
                    initial={false}
                    className="absolute top-1/2 left-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-1/2 -translate-y-1/2 z-10 px-4 py-2 text-sm rounded-lg pointer-events-none text-white shadow-lg"
                    style={{ background: project.titleColor || "rgba(0,0,0,0.8)" }}
                  >
                    View Live Site ↗
                  </motion.div>

                  <Image
                    src={project.src}
                    alt={`${project.name} Hero`}
                    layout="responsive" // Make the image responsive
                    width={1200}  // Set a width (adjust as needed)
                    height={800}  // Set a height (adjust as needed)
                    className="hero-image object-contain h-full w-full inset-0"
                  />
                </a>
              ) : (
                <Image
                  src={project.src}
                  alt={`${project.name} Hero`}
                  layout="responsive" // Make the image responsive
                  width={1200}  // Set a width (adjust as needed)
                  height={800}  // Set a height (adjust as needed)
                  className="hero-image object-contain h-full w-full inset-0"
                />
              )}

          </div>
        </div>

        <div className="project-title p-[2em] lg:p-0">
          <div className="page-head flex align-baseline">
            <div className="page-title w-full m-0 text-left md:text-center">
              <h1
                className="text-[2rem] sm:text-[3.24rem] md:text-[5rem] font-[var(--main)]"
                style={{ color: project.titleColor || "#54c8e8" }}
              >
                {project.name}
              </h1>
            </div>
          </div>
          <div className="next-project p-[2em] lg:p-0 w-full">
            <motion.hr
              className="head-separator bg-white h-[2px] w-full"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{
                scaleX: 1,
                transition: { duration: 0.8, ease: easings.easeInOutQuint },
              }}
            />
          </div>
        </div>

        <div className="project-intro p-[2em] lg:p-0 flex justify-between flex-col md:flex-row">
          <div className="project-data w-full md:w-1/2">
            <table>
              <tbody>
                <tr>
                  <td>
                    <h6 className="text-[#54c8e8] text-2xl">Category</h6>
                  </td>
                  <td>
                    <ul>
                      <li className="text-[1rem]">{project.category}</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="text-2xl">Year</h6>
                  </td>
                  <td>
                    <p className="text-[1rem]">{project.year}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="project-description w-full md:w-3/4">
            <p className="presentation-text w-full opacity-full transform-none md:text-[1.5rem] font-normal">
              {project.description}
            </p>
          </div>
        </div>

        <div className="project-content pt-[2rem] lg:p-0">
          {project.images.map((img: string, i: number) => (
            <AnimatedImage
              key={i}
              src={img}
              alt={`Image ${i + 1}`}
              color={project.titleColor}
            />
          ))}
        </div>


        <div className="next-project p-[2em] lg:p-0 w-full">
          <motion.hr
            className="head-separator bg-white h-[2px] w-full"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{
              scaleX: 1,
              transition: { duration: 0.8, ease: easings.easeInOutQuint },
            }}
          />
          <a href={`/projects/${nextProject.slug}`}>
            <div className="next-project-wrapper flex flex-row justify-between">
              <div className="next-project-left w-1/2">
                <div className="next-project-selected-wrapper absolute overflow-hidden">
                  <h4 className="next-project-selected pr-[12px] relative">
                    Next project <span>→</span>
                  </h4>
                </div>
              </div>
              <div className="next-project-right w-1/2 text-right">
                <h4>{nextProject.name}</h4>
                <p>{nextProject.category}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
