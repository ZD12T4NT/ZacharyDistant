"use client";

import { useState } from "react";
import { Code, LayoutTemplate, MonitorSmartphone, Paintbrush } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Offer = {
  title: string;
  description: string;
  icon: any;
  image: string;
};

const offers: Offer[] = [
  {
    title: "Templates",
    description: "Custom-built templates for portfolios, blogs, and landing pages. Built to scale, designed to impress.",
    icon: LayoutTemplate,
    image: "/templateshowcase.png",
  },
  {
    title: "Custom Code",
    description: "No bloat. Just clean, purpose-built logic with React, TypeScript, and Next.js tailored to your goals.",
    icon: Code,
    image: "/codeblock.jpeg",
  },
  {
    title: "Web Builds",
    description: "From Figma to fully deployed. I engineer performant, scalable frontends, pixel for pixel.",
    icon: MonitorSmartphone,
    image: "/webbuild.png",
  },
  {
    title: "Design",
    description: "I code what I design. Modern, breathable UIs that align with usability and aesthetic clarity.",
    icon: Paintbrush,
    image: "/figmadesign.png",
  },
];

const OffersPage = () => {
  const [hovered, setHovered] = useState<Offer | null>(offers[0]); // Default image

  return (
    <div className="relative py-10 sm:pb-20 pt-40 bg-zinc-950 text-white ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 items-center">
          <div className="lg:pr-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-semibold tracking-wide uppercase text-white/70">My Services</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">What I Offer</p>
              <p className="mt-4 text-lg text-zinc-300">
                Whether you're starting from scratch or need a custom feature built into your app, I help you ship fast
                without compromise.
              </p>
            </motion.div>

            <dl className="mt-10 space-y-8 text-base lg:max-w-none">
              {offers.map((offer, index) => (
                <motion.div
                  key={offer.title}
                  className="relative flex items-start gap-4 cursor-pointer"
                  onMouseEnter={() => setHovered(offer)}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  viewport={{ once: true }}
                >
                  <offer.icon className="w-6 h-6 flex-shrink-0 text-white" />
                  <div>
                    <dt className="font-semibold text-white">{offer.title}</dt>
                    <dd className="mt-1 text-zinc-400">{offer.description}</dd>
                  </div>
                </motion.div>
              ))}
            </dl>
          </div>

          <div className="relative w-full h-[600px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={hovered?.image}
                src={hovered?.image}
                alt={hovered?.title}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-xl ring-1 ring-gray-400/10"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
