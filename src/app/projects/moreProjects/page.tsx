"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // adjust this for more or less delay
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

const moreProjects = [
  {
    name: "Apollo Solutions",
    img: "/apollosolutions.png",
    url: "https://www.apollo-solutions.com/",
  },
  {
    name: "JCW Catalyst",
    img: "/catalyst.png",
    url: "https://www.catalystcareers.com/",
  },
  {
    name: "MRJ Recruitment",
    img: "/mrj.png",
    url: "https://www.mrjrecruitment.com/",
  },
  {
    name: "Daniel Owen",
    img: "/dowen.png",
    url: "https://www.danielowen.co.uk/",
  },
  {
    name: "McGregor Boyall",
    img: "/mcgregorboyall.png",
    url: "https://mcgregor-boyall.com/",
  },
  {
    name: "Ntrinsic Global",
    img: "/ntrinsic.png",
    url: "https://www.ntrinsicglobal.com/",
  },
  {
    name: "Sentinel IT",
    img: "/sentinelit.png",
    url: "https://www.sentinelit.com/",
  },
  {
    name: "Oho Recruitment",
    img: "/oho.png",
    url: "https://www.oho.co.uk/",
  },
  {
    name: "Warman O'Brien",
    img: "/warmanobrien.png",
    url: "https://www.warmanobrien.com/",
  },
  {
    name: "CPL Healthcare",
    img: "/cpl.png",
    url: "https://www.cplhealthcare.com/",
  },
  {
    name: "Kenny Whelan - A CPL Company",
    img: "/kennywhelan.png",
    url: "https://www.kenny-whelan.ie/",
  },
  {
    name: "Cybernetic Search",
    img: "/cybernetic.png",
    url: "https://www.cyberneticsearch.com/",
  },
  {
    name: "Understanding Solutions",
    img: "/understandingsolutions.png",
    url: "https://www.understandingsolutions.com/",
  },
];

export default function MoreProjectsPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full bg-black text-white pt-20 p-4">
      <div className="w-[90%] md:max-h-[80vh] p-2">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
       {moreProjects.map((project, index) => (
            <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: index * 0.1, // stagger manually
                }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group md:h-[90vh]"
                >
                <div className="relative overflow-hidden rounded-2xl">
                    <img
                    src={project.img}
                    alt={project.name}
                    className="w-full md:h-[80vh] object-cover rounded-2xl"
                    tabIndex={0}
                    />
                </div>
                <p className="mt-2 text-lg font-semibold opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.name} →
                </p>
                </a>
            </motion.div>
        ))}

        </motion.div>
      </div>
    </div>
  );
}
