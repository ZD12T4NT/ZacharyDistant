"use client";

import { motion } from "framer-motion";
import { easings, textRevealMotionFade } from "./utils/animations";
import { Project } from '@/Types/project'; // Correct import of Project type
import '../app/projects/projectStyles.css'


type Props = {
  project: Project;
  nextProject: Project;
};

export default function ProjectTemplate({ project, nextProject }: Props) {
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
            <motion.img
              src={project.src}
              initial={{ y: 30 }}
              animate={{
                y: [0, -10, 10, 0],
                transition: {
                  duration: 5,
                  ease: "linear",
                  repeat: Infinity,
                },
              }}
              className="hero-image object-contain h-full w-full inset-0"
              alt={`${project.name} Hero`}
            />
          </div>
        </div>

        <div className="project-title p-[2em] lg:p-0">
          <div className="page-head flex align-baseline">
            <div className="page-title w-full m-0 text-left md:text-center">
            <h1
                className="text-[2rem] sm:text-[3.24rem] md:text-[5rem] font-[var(--main)]"
                style={{ color: project.titleColor || '#54c8e8' }} // fallback if color is missing
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
            <p className="presentation-text  w-full opacity-full transform-none md:text-[1.5rem] font-normal">{project.description}</p>
          </div>
        </div>

        <div className="project-content p-[2em] lg:p-0 text-[1.2rem]">
          <h6>Showcase</h6>
          {project.images.map((img: string, i: number) => (
            <div className="mb-[3rem]" key={i}>
                <img src={img} alt={`Image ${i + 1}`} />
            </div>
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
