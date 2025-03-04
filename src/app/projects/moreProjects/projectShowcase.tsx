"use client";

import React from "react";
import { motion } from "framer-motion";

interface Project {
  image: string;
  link: string;
  name: string;
}

interface ProjectShowcaseProps {
  images: Project[];
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ images }) => {
  return (
    <motion.div
      className="flex justify-center items-center min-h-screen w-full pt-20 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="w-[90%] md:max-h-[80vh] p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group md:h-[90vh]"
            >
              {/* Image with hover effect */}
              <div className="relative overflow-hidden rounded-2xl">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-full md:h-[80vh] object-cover rounded-2xl"
                  whileTap={{ scale: 0.95 }}
                />
              </div>

              {/* Title (fades in when hovering over the image) */}
              <motion.p
                className="mt-2 text-lg font-semibold opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                {project.name} →
              </motion.p>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectShowcase;
