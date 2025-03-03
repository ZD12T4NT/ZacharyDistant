"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectShowcase from "../../projects/moreProjects/projectShowcase"; 

const images = [
  { image: "/apollosolutions.png", link: "https://www.apollo-solutions.com/", name: "Apollo Solutions" },
  { image: "/catalyst.png", link: "https://www.catalystcareers.com/", name: "JCW Catalyst" },
  { image: "/mrj.png", link: "https://www.mrjrecruitment.com/", name: "MRJ Recruitment" },
  { image: "/dowen.png", link: "https://www.danielowen.co.uk/", name: "Daniel Owen" },
  { image: "/mcgregorboyall.png", link: "https://mcgregor-boyall.com/", name: "McGregor Boyall" },
  { image: "/ntrinsic.png", link: "https://www.ntrinsicglobal.com/", name: "Ntrinsic Global" },
  { image: "/oho.png", link: "https://www.oho.co.uk/", name: "Oho Recruitment" },

];

export default function Page() {
  return (
    <motion.div
      className="flex flex-col justify-center items-center min-h-screen w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <ProjectShowcase images={images} />
    </motion.div>
  );
}
