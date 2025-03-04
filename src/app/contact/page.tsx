"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { easings, textRevealMotionFade } from "@/components/utils/animations";
import SocialLinks from "@/components/nav-bar/SocialLinks";
import "../projects/projectStyles.css";
import ContactForm from "./contactForm";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="page-content overflow-hidden h-auto md:h-full w-full">
      <motion.div className="contact flex flex-wrap lg:justify-between"
      >
        <div className="left-side w-full lg:w-[60%] lg:pr-[1rem]">
          <div className="page-head m-0 flex align-baseline flex-col">
            <div className="page-title w-full text-left m-0 text-ellipsis overflow-x-hidden text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[7rem] leading-none overflow-hidden">
              LET'S <span className="lg:ml-[5rem] lg:block">GET IN</span> TOUCH
            </div>
            <motion.hr
              className="head-separator mt-[1rem] md:mt-[3rem] bg-white h-[2px] w-full"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1, transition: { duration: 0.8, ease: easings.easeInOutQuint } }}
            />
            <div className="mt-[3rem]">
              <div className="contact-details">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side with Form */}
        <div className="right-side w-full mt-[3rem] lg:mt- lg:w-[40%] lg:pl-[1rem]">
          <ContactForm />
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
