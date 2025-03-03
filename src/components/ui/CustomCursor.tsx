"use client"

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function CustomCursor() {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [hovering, setHovering] = useState(false);
  
  const bigBallControls = useAnimation();
  const smallBallControls = useAnimation();

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
      
      bigBallControls.start({ x: e.clientX - 15, y: e.clientY - 15, transition: { duration: 0.05, ease: "linear" } });
      smallBallControls.start({ x: e.clientX - 5, y: e.clientY - 7, transition: { duration: 0.02, ease: "linear" } });
    };

    const onMouseEnter = () => bigBallControls.start({ scale: 4, transition: { duration: 0.2 } });
    const onMouseLeave = () => bigBallControls.start({ scale: 1, transition: { duration: 0.2 } });

    document.addEventListener("mousemove", onMouseMove);
    document.querySelectorAll(".hoverable").forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.querySelectorAll(".hoverable").forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-[1000] mix-blend-difference">
      <motion.div
        animate={bigBallControls}
        className="fixed top-0 left-0"
      >
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" fill="#f7f8fa" />
        </svg>
      </motion.div>
      
      <motion.div
        animate={smallBallControls}
        className="fixed top-0 left-0"
      >
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" fill="#f7f8fa" />
        </svg>
      </motion.div>
    </div>
  );
}
