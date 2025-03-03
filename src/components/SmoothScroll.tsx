"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return;

    const contentHeight = contentRef.current.scrollHeight;
    document.body.style.height = `${contentHeight}px`; // Make body scrollable

    gsap.to(contentRef.current, {
      y: () => -(contentHeight - window.innerHeight),
      ease: "power1.out",
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div ref={contentRef} className="absolute top-0 left-0 w-full">
        {children}
      </div>
    </div>
  );
};

export default SmoothScroll;
